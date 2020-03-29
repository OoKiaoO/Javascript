const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
    },
    get appetizers() { 
      return this._courses.appetizers;
    },
    set appetizers(appetizers) { 
      this._courses.appetizers = appetizers;
    },
    get mains() {
      return this._courses.mains;
    },
    set mains(mains) {
      this._courses.mains = mains;
    },
    get desserts() { 
      return this._courses.desserts;
    },
    set desserts(desserts) {
      this._courses.desserts = desserts;
    },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    } 
    },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    this._courses[courseName].push(dish);
    /* if(courseName === 'appetizers') {
      this._course.appetizers.push(dish);
    } else if(courseName === 'mains') {
      this._courses.mains.push(dish);
    } else if(courseName === 'desserts') {
      this._courses.desserts.push(dish);
    }; */
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal: function() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The total price is ${totalPrice}$.`;
  }
};

menu.addDishToCourse('appetizers', 'Breadsticks', 4);
menu.addDishToCourse('appetizers', 'Prosciutto', 5.5);
menu.addDishToCourse('appetizers', 'Fries', 3.5);

menu.addDishToCourse('mains', 'Parmigiana', 8);
menu.addDishToCourse('mains', 'Carbonara', 7.5);
menu.addDishToCourse('mains', 'Pizza', 10);

menu.addDishToCourse('desserts', 'Tiramisu', 4);
menu.addDishToCourse('desserts', 'Panna Cotta', 4);
menu.addDishToCourse('desserts', 'Apple Pie', 4);

const meal = menu.generateRandomMeal();
console.log(meal);