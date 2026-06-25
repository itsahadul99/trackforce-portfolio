FROM node:22-alpine AS deps
WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --frozen-lockfile


FROM node:22-alpine AS build
WORKDIR /app

RUN corepack enable

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN pnpm run build


FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=80
ENV HOSTNAME=0.0.0.0

# Copy the standalone server bundle (includes all runtime deps)
COPY --from=build /app/.next/standalone ./
# Copy static assets (_next/static/*)
COPY --from=build /app/.next/static ./.next/static
# Copy public folder (images, fonts, etc.)
COPY --from=build /app/public ./public

EXPOSE 80

CMD ["pnpm", "start"]
