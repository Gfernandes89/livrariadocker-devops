# Site Institucional — Livraria Dom Bosco

Projeto desenvolvido como atividade final de DevOps utilizando:
- Git e GitHub
- Docker e Docker Hub
- Jenkins Pipeline (CI/CD)
- Deploy com Docker Compose

## Tecnologias
HTML, CSS e JavaScript servidos por Nginx.

## Estrutura
src/favicon.ico, index.html, livros.json, script.js, style.css   
Dockerfile  
docker-compose.yml  
Jenkinsfile  

## Rodar localmente
docker build -t livrariadocker .
docker run -p 8080:80 livrariadocker

## Acesso
http://localhost:8080
