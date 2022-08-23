pipeline {
  agent {
    docker { image 'node:latest' args '-u root' }
  }
  stages {
/*

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
 */

  stage('Install') {
       steps { sh 'npm install' }
     }

    stage('Build') {
      steps { sh 'npm run build' }
    }
  }
}
