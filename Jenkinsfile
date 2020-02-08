pipeline {
    agent any
    stages {
        stage('Build') { 
            steps {
                nodejs(nodeJSInstallationName: 'recent node') {
                    sh 'npm install' 
                }
            }
        }
        stage('Deploy') {
                    steps {
                        nodejs(nodeJSInstallationName: 'recent node') {
                            sh 'docker build -tag backend'
                            sh 'docker run -p 3000:3000 backend'
                        }
                    }
                }

    }
}
