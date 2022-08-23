pipeline {
  agent {
    docker {
      image 'node:16.17.0'
      args '-u root:root'
    }
  }

  environment {
    CYPRESS_CACHE_FOLDER = '$PWD/cy-cache-here'
  }
  stages {
    /*stage('Build') {
      steps {
        sh 'npm install'
        sh 'npm run build'
      }
    }*/
    stage('Test') {
      steps {
        sh 'apt-get update -y'
        sh 'apt-get install chromium -y'
        sh 'npm run test:ci'
      }
    }
  }
}
