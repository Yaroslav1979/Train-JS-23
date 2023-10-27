// Адаптер (Adapter) — це патерн програмування, який дозволяє об'єктам з інтерфейсом несумісним з іншими об'єктами працювати разом,
// перетворюючи інтерфейс одного об'єкта на інтерфейс, очікуваний іншим об'єктом.

// // Клас BankTransfer представляє собою систему для здійснення банківських переказів
// class BankTransfer {
//   initiateTransfer(amount) {
//     const calculatedAmount = this.calculateFee(amount);
//     console.log(`Ініціюємо банківський переказ: $${calculatedAmount}`)
//   }
//   calculateFee(amount) {
//     return amount * 1.02;
//   }
//   // Зробіть метод initiateTransfer, який приймає amount та відповідає за ініціювання банківського переказу
//   // Він приймає суму переказу як параметр
//   // Для ініціювання банківського переказу спершу обчислюється сума з урахуванням комісії calculatedAmount = this.calculateFee(amount)
//   // Виводимо інформацію про ініціювання банківського переказу Ініціюємо банківський переказ: $${calculatedAmount}
//   // Зробіть метод calculateFee, який відповідає за розрахунок комісії за переказ
//   // Він приймає amount переказу як параметр та повертає число після розрахування комісії
//   // Логіка розрахунку комісії за переказ amount * 1.02
//   // Припустимо, комісія становить 2% від суми переказу
// }

// // Клас WalletTransfer представляє собою систему для здійснення переказів з гаманця
// class WalletTransfer {
//   processTransfer(amount) {
//     console.log(`Здійснюємо переказ з гаманця: $${amount}`)
//   }
//   // Створіть метод processTransfer, який відповідає за здійснення переказу з гаманця
//   // Він приймає суму переказу як параметр
//   // Виводимо інформацію про здійснення переказу з гаманця Здійснюємо переказ з гаманця: $${amount}
// }

// // Клас TransferAdapter виступає адаптером, який дозволяє нам користуватися
// // методами WalletTransfer так, ніби це BankTransfer.
// class TransferAdapter {
//   constructor(transferSystem) {
//     this.transferSystem = transferSystem;  
//   }
//     // Робимо конструктор, що приймає об'єкт transferSystem типу WalletTransfer
//   // Зберігаємо посилання на об'єкт WalletTransfer у властивості transferSystem
//   initiateTransfer(amount) {
//     const calculatedAmount = this.calculateFee(amount);
//     return  this.transferSystem.processTransfer(calculatedAmount);
      
//   }
//   calculateFee(amount) {
//      return amount * 1.2;
//   }
//   // Робимо метод initiateTransfer, який адаптує API WalletTransfer до API BankTransfer.
//   // Він приймає amount як аргумент та повертає результат виконання переказу.
//   // Викликаємо допоміжний метод calculateFee для обчислення комісії за переказ та результат записуєм в константу calculatedAmount
//   // Викликаємо метод processTransfer об'єкту WalletTransfer з calculatedAmount.
//   // В результаті повертаємо результат виконання переказу.
 
//   // Створюємо метод calculateFee, що приймає amount та обчислює суму комісії за переказ amount * 1.2, засновуючись на вхідній сумі.
//   // Повертаємо amount * 1.2
// }
// console.log("Завдання 5 ====================================");
// Після виконання розкоментуйте код нижче

// Створимо екземпляри BankTransfer
// const purchase1 = new BankTransfer();
// purchase1.initiateTransfer(1000);

// const purchase2 = new BankTransfer();
// purchase2.initiateTransfer(10);
// -----------------------------------------------------------------------------

// Тут якісь неправельні інструкції і заключення, ми ніяким чином не об'єднуємо BankTransfer та WalletTransfer за допомогою TransferAdapter, 
// а в кінці два рази виводимо результат платтежу через одну і ту ж систему (просто змінили суму переказу): 
// const purchase1 = new BankTransfer();
// purchase1.initiateTransfer(1000);

// const purchase2 = new BankTransfer();
// purchase2.initiateTransfer(10);
//  на уроці Кирило показував приклад, де використовува додатковий клас з умовамии, де в залежності від суми змінював вид платіжної системи, у нас такого в умові нема, 
// тому код якийсь безтолковий як на мене (комісія ніяк не змінюється, тому що працює лише лише BankTransfer, TransferAdapter взагалі в ньому не виконує ніякої роботи). Тому я переписав код таким чином, щоб в нас змінювалася 
// комісія (вказана в системах переказів) змінювалася в залежності від того, яку систему переказу використовуємо (вона вибирається десь зовні), 
//  тоді і очевидна демонстрація роботи адаптера:

// платіж через BankTransfer:

class BankTransfer {
  initiateTransfer(amount) {
    const calculatedAmount = this.calculateFee(amount);
    console.log(`Ініціюємо банківський переказ: $${calculatedAmount}`);
  }
  calculateFee(amount) {
    return amount * 1.02;
  }
}


// платіж через гаманець WalletTransfer:

class WalletTransfer {
  initiateTransfer(amount) {
    const calculatedAmount = this.calculateFee(amount);
    console.log(`Здійснюємо переказ з гаманця: $${calculatedAmount}`);
  }
  calculateFee(amount) {
    return amount * 1.2;
  }
}

// адаптер:

class TransferAdapter {
  constructor(transferSystem) {
    this.transferSystem = transferSystem;  
  }
  initiateTransfer(amount) {
    return this.transferSystem.initiateTransfer(amount);
  }
}


console.log("Завдання 5 ====================================");

//  Після виконання розкоментуйте код нижче

// Створимо екземпляр BankTransfer
const purchase1 = new BankTransfer();
purchase1.initiateTransfer(1000);

// Створимо екземпляр WalletTransfer

const purchase2 = new WalletTransfer();
purchase2.initiateTransfer(10);

//  Чи я щось не так зрозумів в цілях цієї залдачі?