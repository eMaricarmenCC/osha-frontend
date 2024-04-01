# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Construcción de la imagen docker

docker build -t osha-frontend -f docker/Dockerfile .
sudo docker build -t osha-frontend -f docker/Dockerfile .

# Ejecutar un contenedor basado en esta imagen

docker run -p 5173:5173 osha-frontend
sudo docker run -p 5173:5173 -d osha-frontend