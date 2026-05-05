# -------------------------------
# Stage 1: Build React App
# -------------------------------
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build


# -------------------------------
# Stage 2: Serve using lightweight Node server
# -------------------------------
FROM node:18-alpine

WORKDIR /app

# Install simple static server
RUN npm install -g serve

# Copy build output
COPY --from=builder /app/dist ./dist
# If CRA → use /build instead of /dist

# Cloud Run requires this
ENV PORT=8080

EXPOSE 8080

# Start server on required port
CMD ["serve", "-s", "dist", "-l", "8080"]