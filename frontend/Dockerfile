
# 1. Base image
FROM node:18-alpine
# this is used to reduce the image size

# 2. Set working directory
WORKDIR /app

# 3. Copy only dependency files first (for caching)
COPY package.json package-lock.json ./

# 4. Install dependencies (deterministic)
RUN npm install
# we can use npm ci

# 5. Copy rest of the app
COPY . .

# 6. Expose port (React runs on 3000)
EXPOSE 3000

# Create non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Change ownership
RUN chown -R appuser:appgroup /app

# Switch user
USER appuser


# 7. Start the app
CMD ["npm", "start"]
