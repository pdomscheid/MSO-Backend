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
                            sh 'node app.js'
                        }
                    }
                }

    }
}
