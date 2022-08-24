pipeline {
  agent {
    docker {
      image 'node:current-alpine3.12'
      args '-u root:root'
    }
  }

  environment {
    CYPRESS_CACHE_FOLDER = '$PWD/cy-cache-here'
    CHROME_BIN = '/usr/bin/chromium-browser'
  }
  stages {
    /* stage('Build') {
       steps {
         sh 'npm install'
         sh 'npm run build'
       }
     }*/
    stage('Test') {
      steps {
        sh 'apt-get update'
        sh 'apt-get install chromium -y'
        sh 'npm run test:ci'
      }
    }
  }
}
