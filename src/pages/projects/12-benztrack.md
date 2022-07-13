---
title: "benztrack.apk"
service: "Mobile Development (Kotlin)"
date: "13/07/2022"
started: "22/04/2022"
finished: "23/06/2022"
projectLink: "https://github.com/nicolasguarini/benztrack"
preview: "Android application to keep track of expenses related to your car, monitor fuel consumption and CO emissions."
---
<style>a{color: white;} a:hover{color:white;}</style>

<br />
<div align="center">
  <a href="https://github.com/nicolasguarini/benztrack">
    <img src="https://github.com/nicolasguarini/benztrack/raw/main/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">BenzTrack</h3>

  <p align="center">
    A mobile application to keep track of expenses related to your car, monitor fuel consumption and Co2 emissions.
    <br />
    <a href="https://github.com/nicolasguarini/benztrack"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/nicolasguarini/benztrack">View Demo</a>
    ·
    <a href="https://github.com/nicolasguarini/benztrack/issues">Report Bug</a>
    ·
    <a href="https://github.com/nicolasguarini/benztrack/issues">Request Feature</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project

<img src="https://github.com/nicolasguarini/benztrack/raw/main/mockup.png" style="width: 100%" >

BenzTrack was born from the idea of encouraging people to pollute less, and at the same time allowing you to keep track of how much money you spend on the car through different graphs. 

The app also (through periodic notifications) will compliment us if we are improving in terms of pollution, and vice versa it will "scold" us when we pollute more.

It is possible to choose your car from a huge database, after which you can start recording your expenses, divided into:
- taxes
- insurance
- maintenance
- refueling

As the expenses are entered, the application will calculate in real time the average fuel consumption and the quantities of CO2 emitted, based on the "Euro" class of the vehicle entered during registration.

Every 7 days a comparison will be made between the current issues and those of the previous month, and the relevant notification will be sent informing us of our performance.

### Built With

BenzTrack is an Android application developed in Kotlin, and several technologies, libraries and plugins were used to build it:

* [Figma](https://www.figma.com/)
* [Android Studio](https://developer.android.com/studio)
* [Kotlin](https://developer.android.com/kotlin)
* [MPAndroidChart](https://github.com/PhilJay/MPAndroidChart)
* [SQLite](https://www.sqlite.org/)
* [Room Persistence Library](https://developer.android.com/training/data-storage/room)
* [OkHTTP](https://square.github.io/okhttp/)
* [RapidAPI](https://rapidapi.com/principalapis/api/car-data/)


<!-- GETTING STARTED -->
## Getting Started

To install BenzTrack on your device, just install the application from the .apk file that you find in the [release](https://github.com/nicolasguarini/benztrack/releases) section of the repository. 
If, on the other hand, you want to install the project locally in your work environment, you have to meet some prerequisites.

### Prerequisites

Here is a short list of the requirements you must meet in order to compile the project locally:
* AVD (Android Virtual Device) or physical device with Android API level 21
* Have a [car-data](https://rapidapi.com/principalapis/api/car-data/) API Key

### Installation

_Here is an example of the steps to follow to install and build the project on Android Studio locally_:

1. Get a free API Key at [rapidapi.com/principalapis/api/car-data/](https://rapidapi.com/principalapis/api/car-data/)

2. Clone the repo \
   `
   git clone https://github.com/nicolasguarini/benztrack/
   `
   
3. Import `benztrack/` folder in Android Studio

4. Enter your API in an `apikey.properties` file in the project root \
   `
   RAPIDAPI_KEY="XXXXXXXXXXX"
   `
5. Build project

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the Apache 2.0 License. See `LICENSE.txt` for more information.