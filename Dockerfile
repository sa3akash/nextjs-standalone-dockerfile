# # Use an official Node runtime as the base image
# FROM node:20-alpine AS base

# # Set working directory
# WORKDIR /app

# # Install dependencies
# FROM base AS deps
# COPY package*.json ./
# RUN npm install --frozen-lockfile

# # Build the application
# FROM base AS builder
# COPY . .
# COPY --from=deps /app/node_modules ./node_modules
# RUN npm run build

# # Prepare the final image
# FROM node:20-alpine AS runner

# # Create a non-root user
# RUN addgroup -S nextjs && adduser -S nextjs -G nextjs

# WORKDIR /app

# # Copy built files and necessary folders from builder stage
# COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/public ./public
# COPY --from=builder /app/package*.json ./

# # Change ownership of the files to the non-root user
# RUN chown -R nextjs:nextjs /app

# USER nextjs

# # Expose the port the app runs on
# EXPOSE 3001

# # Set environment variables
# ENV NODE_ENV production
# ENV PORT 3001

# # Start the application
# CMD ["npm", "start"]


# Stage 1: Build the Next.js application
FROM node:20-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application files
COPY . .

# Build the Next.js application
RUN npm run build

# Install production dependencies
RUN npm ci --only=production

# Stage 2: Create the final image
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Expose the port the app runs on
EXPOSE 3001
ENV NODE_ENV production
ENV PORT 3001
# Command to run the application
CMD ["npm", "start"]
