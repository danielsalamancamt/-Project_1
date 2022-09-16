/**
 *
 * @author Daniel
 */
import java.util.Scanner;
class Reto1{
    private final Scanner scanner = new Scanner(System.in);
    public String read(){
        return this.scanner.nextLine();
    }
    
    public String Calcular_Riesgo (float IMC,int edad){
        String riesgo="";
        if(IMC<22 && edad<45)riesgo="Bajo";
        if(IMC<22 && edad>=45)riesgo="Medio";
        if(IMC>=22 && edad<45)riesgo="Medio";
        if(IMC>=22 && edad>=45)riesgo="Alto";
        return riesgo;
    }
    
    public float Calcular_IMC(float masa, float altura){
        float IMC=masa/(altura*altura);
        return IMC;
    }
    
    public boolean validacion(float masa,float altura,int edad){
        return !((masa<0 || masa>150)||(altura<0.1 || altura>2.5)||(edad<0 || edad>110));
    }
    
    public void run(){
        String[] entradas = read().split(" ");
        
        float masa=Float.parseFloat(entradas[0]);
        float altura=Float.parseFloat(entradas[1]);
        int edad=Integer.parseInt(entradas[2]);
        
        if(validacion(masa,altura,edad)){
            float IMC=Calcular_IMC(masa,altura);
            System.out.println(String.format("%.1f",IMC)+" "+
                    Calcular_Riesgo(IMC,edad));
        }else{
            System.out.println("ERROR");
        }
    }
}