FROM node:18-slim

# Set working directory
WORKDIR /app

# Copy SPX Graphics
COPY SPX-GC/ ./SPX-GC/
COPY templates/ ./templates/
COPY assets/ ./assets/
COPY config/ ./config/

# Install dependencies
WORKDIR /app/SPX-GC
RUN npm install

# Create data directory for SPX
RUN mkdir -p /app/data

# Copy custom templates to SPX templates directory
RUN cp -r /app/templates/* ./ASSETS/templates/ || true

# Expose SPX default port
EXPOSE 5000

# Set environment variables
ENV SPX_DATA_ROOT=/app/data
ENV NODE_ENV=production

# Start SPX Graphics server
CMD ["npm", "start"]