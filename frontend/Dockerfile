# Build stage
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the React app code into the container
COPY . .

# Build the React app for production
RUN npm run build

# Nginx stage: Serve the built files with nginx
FROM nginx:alpine

# Copy the built React app from the build stage into the nginx container's html directory
COPY --from=build /app/dist /usr/share/nginx/html


# Expose port 80
EXPOSE 80

# Run nginx in the foreground to keep the container alive
CMD ["nginx", "-g", "daemon off;"]
