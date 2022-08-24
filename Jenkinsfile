pipeline {
  agent {
    docker {
      image 'selenium/node-chrome'
      args '-u root:root'
    }
  }

  environment {
    CYPRESS_CACHE_FOLDER = '$PWD/cy-cache-here'
    CHROME_BIN = '/usr/bin/chromium-browser'
  }
  stages {
     stage('Build') {
       steps {
         sh 'npm install'
         /*  sh 'npm run build'*/
       }
     }
    stage('Test') {
      steps {
        sh 'npm run test:ci'
      }
    }
  }
}
