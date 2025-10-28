# Base de datos
kubectl apply -f mysql-statefulset.yml

# Esperar a que MySQL esté listo
kubectl wait --for=condition=ready pod -l app=mysql --timeout=300s

# Backend y Frontend
kubectl apply -f backend-deployment.yml
kubectl apply -f frontend-deployment.yml

# Herramientas
kubectl apply -f prometheus-deployment.yml
kubectl apply -f grafana-deployment.yml
kubectl apply -f phpmyadmin-replicaset.yml  # Actualizado con Deployment