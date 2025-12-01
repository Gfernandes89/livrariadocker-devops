pipeline {
    agent any

    environment {
        APP_IMAGE = "gfernandes89/livrariadocker-devops"
        TAG = "latest"
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Gfernandes89/livrariadocker-devops.git'
            }
        }

        stage('Build Imagem Docker') {
            steps {
                script {
                    docker.build("${APP_IMAGE}:${TAG}")
                }
            }
        }

        stage('Push para Docker Hub') {
            steps {
                withDockerRegistry([credentialsId: 'docker-hub-credentials', url: '']) {
                    script {
                        docker.image("${APP_IMAGE}:${TAG}").push()
                    }
                }
            }
        }

        stage('Deploy via Docker Compose') {
            steps {
                sshagent(['deploy-server']) {
                    sh '''
                    ssh -o StrictHostKeyChecking=no usuario@IP_DO_SERVIDOR "
                        cd /caminho/do/projeto &&
                        docker compose pull &&
                        docker compose down &&
                        docker compose up -d
                    "
                    '''
                }
            }
        }
    }
}

