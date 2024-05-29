pipeline {
    agent any

    environment {
        DEPLOY_FILE = "dev.zip"
        EEGSAC_HOME = "/home4/educa7ls"
        DEPLOY_FOLDER = "/home4/educa7ls/testing.osha.es"
    }

    stages {
        stage("inicializar") {
            steps {
                sh "echo \"Hola mundoo \""
            }
        }
        stage("compilar") {
            agent {
                docker {
                    image 'node'
                    reuseNode true
                }
            }
            steps {
                sh "npm install"
                sh "npm run build"
            }
        }
        stage("zip dist") {
            steps {
                dir('osha-frontend') {
                    dir("dist") {
                        sh "zip -r -q $DEPLOY_FILE *"
                    } 
                }   
            }
        }
        stage("zip src") {
            steps {
                dir('osha-frontend') {
                    sh "zip -r -q src.zip src"
                }   
            }
        }
    }
}
