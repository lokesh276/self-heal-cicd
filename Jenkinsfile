pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo "📥 Code already pulled from GitHub"
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t aiops-app .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker rm -f aiops-container || true'
                sh 'docker run -d --name aiops-container aiops-app'
            }
        }

        stage('AI Anomaly Check') {
            steps {
                script {
                    def result = sh(script: "python3 anomaly.py", returnStatus: true)

                    if (result != 0) {
                        error("❌ Anomaly Detected!")
                    }
                }
            }
        }
    }

    post {
        failure {
            echo "⚠️ Self-Healing Triggered!"

            sh 'docker rm -f aiops-container || true'
            sh 'docker run -d --name aiops-container aiops-app'

            echo "✅ Service Restarted Automatically"
        }

        success {
            echo "✅ System Healthy"
        }
    }
}
