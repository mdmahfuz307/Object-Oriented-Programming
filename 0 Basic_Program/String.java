public class String {
    public static void main(String[] args){
        //Strings
        //concatenate
        String name1= "Nirob";
        String name2= "Rikob";
        String name3= name1 + "and" + name2;
        System.out.println(name3);

        //charAt
        String name = "Shoshi";
        System.out.println(name.charAt(1));


        //replace
        String name = "Masuma";
        String name2 = name.replace('a','z');
        System.out.println(name2);

        //substring
        String name = "Khorshed and Nirob";
        System.out.println(name.substring(0,4));

    }
}
