pipeline {
    agent any

    environment {
        DOCKERHUB_USER = 'seuusuario'
        IMAGE_NAME = 'livraria-site'
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/seuusuario/livraria-site.git'
            }
        }

        stage('Docker Build') {
            steps {
                sh "docker build -t $DOCKERHUB_USER/$IMAGE_NAME:latest ."
            }
        }

        stage('Docker Login & Push') {
            steps {
                withCredentials([string(credentialsId: 'dockerhub-pass', variable: 'PASS')]) {
                    sh "echo $PASS | docker login -u $DOCKERHUB_USER --password-stdin"
                }
                sh "docker push $DOCKERHUB_USER/$IMAGE_NAME:latest"
            }
        }

        stage('Deploy') {
            steps {
                sh "docker compose down || true"
                sh "docker compose up -d"
            }
        }
    }
}
