pipeline {
  agent {
    docker { image 'node:16.17.0'
    }
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
       steps { sh 'npm run install' }
     }

    stage('Build') {
      steps { sh 'npm run build' }
    }
  }
}
