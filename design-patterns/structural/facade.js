/* Structural Design Patterns */
//These patterns concern class and object composition.
//They ease the design by identifying a simple way to realize relationships among entities.
//They use inheritance to compose interfaces.

/* Facade */
//It provides a simplified interface to complex code.

//Let’s take an example of a client interacts with the computer.

class CPU {
  freeze() {
    console.log("Freezed...");
  }
  jump(position) {
    console.log("Go...");
  }
  execute() {
    console.log("Run...");
  }
}

class Memory {
  load(position, delta) {
    console.log("Load...");
  }
}

class HardDrive {
  read(lba, size) {
    console.log("Read...");
  }
}

class ComputerFacade {
  constructor() {
    this.processor = new CPU();
    this.ram = new Memory();
    this.hdd = new HardDrive();
  }

  start() {
    this.processor.freeze();
    this.ram.load(
      this.BOOT_ADDRESS,
      this.hdd.read(this.BOOT_SECTOR, this.SECTOR_SIZE)
    );
    this.processor.jump(this.BOOT_ADDRESS);
    this.processor.execute();
  }
}

//use this facade
let computer = new ComputerFacade();
computer.start();
