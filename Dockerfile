FROM node:20-alpine AS deps

COPY package*.json ./

# RUN npm ci
RUN npm install

FROM node:20-alpine AS builder

COPY . .
COPY --from=deps /node_modules ./node_modules
RUN npm run build

FROM node:20-alpine AS runner

COPY --from=builder /.next/standalone ./
# COPY --from=builder /public ./public
# COPY --from=builder /.next/static ./.next/static

EXPOSE 3001

ENV PORT 3001

CMD HOSTNAME="0.0.0.0" node server.js