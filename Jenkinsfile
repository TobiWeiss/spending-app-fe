pipeline {
  agent {
    docker { image 'node:latest' }
  }
  stages {
    stage('Install') {
      steps { sh 'npm install' }
    }

    stage('Test') {
      parallel {
        stage('Unit tests') {
            steps { sh 'npm run test:ci' }
        }
      }
    }

    stage('Build') {
      steps { sh 'npm run-script build' }
    }
  }
}
