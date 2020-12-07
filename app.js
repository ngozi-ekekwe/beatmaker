class DrumKit {
  constructor() {
    this.pads = document.querySelectorAll('.pad');
    this.playButton = document.querySelector('.play');
    this.kickAudio = document.querySelector('.kick-sound');
    this.snareAudio = document.querySelector('.snare-sound');
    this.hihatAudio = document.querySelector('.hihat-sound');
    this.index = 0;
    this.bpm = 150;
  }

  activePad() {
    this.classList.toggle('active');
  }

  repeat() {
    let step = this.index % 8 ;
    const activeBars = document.querySelectorAll(`.b${step}`)
    console.log(activeBars)
    this.index++
  }

  start() {
    const interval = (60 / this.bpm) * 1000;
    setInterval(() => {
      this.repeat();
    }, interval)
  }
}

const dummKit = new DrumKit();

dummKit.pads.forEach((pad, index) => {
  pad.addEventListener('click', dummKit.activePad)
})

dummKit.playButton.addEventListener('click', () => {
  dummKit.start();
})
