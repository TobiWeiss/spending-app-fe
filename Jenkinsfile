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
        sh 'apk add --no-cache  chromium --repository=http://dl-cdn.alpinelinux.org/alpine/v3.10/main'
        sh 'npm run test:ci'
      }
    }
  }
}
