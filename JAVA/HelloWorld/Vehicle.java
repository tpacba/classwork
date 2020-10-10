public class Vehicle {
    private int maxSpeed;
    private int wheels;
    private String color;
    private double fuelCapacity;

    Vehicle() {
        this.setMaxSpeed(30);
        wheels = 4;
        this.setColor("red");
        fuelCapacity = 40.50;
    }

    Vehicle(int newMaxSpeed, int newWheels, String newColor, double newFuelCapacity) {
        this.setMaxSpeed(newMaxSpeed);
        wheels = newWheels;
        this.setColor(newColor);
        fuelCapacity = newFuelCapacity;
    }

    public void horn() {
        System.out.println("Beep!");
    }

    public String getColor() {
        return color;
    }

    public void setColor(String newColor) {
        this.color = newColor;
    }

    public int getMaxSpeed() {
        return maxSpeed;
    }

    public void setMaxSpeed(int newSpeed) {
        this.maxSpeed = newSpeed;
    }
}
