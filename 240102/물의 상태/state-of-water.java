import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

     Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
    if (a<0){
         System.out.println("ice");
    }  
    else if(a>100){
       System.out.println("vapor");  // 여기에 코드를 작성해주세요.
    }
    else{
           System.out.println("water");
    }
}
}