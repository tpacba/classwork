class MyClass {
    public static void main(String[] args) {
        Animal dog = new Animal();
        dog.bark();

        Vehicle v1 = new Vehicle();
        Vehicle v2 = new Vehicle();

        v1.setColor("RED");
        System.out.println(v1.getColor());
        v2.setMaxSpeed(34);
        System.out.print(v2.getMaxSpeed() + "mph");
    }
}