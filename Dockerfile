# Stage 1: Build the application
FROM node:20 AS builder

WORKDIR /usr/src/app

COPY package*.json ./

# Install all dependencies including 'devDependencies'
RUN npm install

COPY . .

# Build the application
RUN npm run build

# Stage 2: Create the production image
FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Copy built assets from the builder stage
COPY --from=builder /usr/src/app/dist ./dist

CMD [ "node", "dist/main" ]

