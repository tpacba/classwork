class MyClass {
    public static void main(String[] args) {
        Animal dog = new Animal();
        dog.bark();
        
        Vehicle v1 = new Vehicle();
        Vehicle v2 = new Vehicle(40, 2, "blue", 50.65);

        System.out.println(v1.getColor());
        System.out.println(v2.getMaxSpeed() + "mph");

        Person j = new Person("Bill");

        j.setAge(40);
        celebrateBirthday(j);
        System.out.println(j.getAge());

    }

    static void celebrateBirthday(Person p) {
        p.setAge(p.getAge() + 1);
    }
}