pipeline {
  agent none
  environment {
    CYPRESS_CACHE_FOLDER = '$PWD/cy-cache-here'
    CHROME_BIN = '/usr/bin/chromium-browser'
  }
  stages {
    stage('Build') {
      agent {
        docker {
          image 'node:current-alpine3.12'
          args '-u root:root'
        }
      }
      steps {
        sh 'npm install'
        sh 'npm run build'
      }
    }
    stage('Test') {
      agent {
        docker {
          image 'node:current-alpine3.12'
          args '-u root:root'
        }
      }
      steps {
        sh 'apk add chromium'
        sh 'npm run test:ci'
        sh 'npm start'
        sh 'npm run e2e:ci:desktop'
        sh 'npm run e2e:ci:mobile'
      }
    }
    stage('Deploy') {
      agent any
      steps {
        sh 'docker system prune -af'
        sh 'docker build -t spending-app-fe:${BUILD_NUMBER} .'
        sh 'docker stop spending-app-fe || true && docker rm -f spending-app-fe || true'
        sh 'docker run -p 443:443 -d --name spending-app-fe spending-app-fe:${BUILD_NUMBER}'
      }
    }
  }
}
