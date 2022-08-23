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
        sh 'wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb'
        sh 'dpkg -i google-chrome*.deb'
        sh 'echo google-chrome-stable -version'
        sh 'npm run test:ci'
      }
    }
  }
}
