pipeline {
    agent {
        docker {image 'node:6.3'}
    }

    stages {
        stage('Build') {
            steps {
                npm install
            }
        }
    }
}