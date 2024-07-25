import { Component, computed, input, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'input-child',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './input-child.component.html',
  styleUrl: './input-child.component.css'
})
export class InputChildComponent {

  // Input signal que recibe input-child del componente input. 
  // No se establece un valor por defecto, por si el padre no envía información. 
  // Si el padre no envía información el valor será undefined.
  nombre = input<string>();

  // Input signal que recibe input-child del componente input.
  // Se establece un alias para usar el input signal. 
  edad = input(0, { alias: 'age' });

  // Se quiere pintar en el front cuál sería el resultado de la edad  + 5.
  // Si cambia la edad debe cambiar también el dato.
  // Se usa la función computed. 
  // Cuando cambie la edad se actualizará la variable edadEn5Anios.
  edadEn5Anios = computed(() => this.edad() + 5);

  // Obligatoriamente el padre debe enviar información del apellido al hijo.
  apellido = input.required<string>();

  // Input en el que se configuran los parámetros, el valor (false) y luego posibilidad de transformar el dato con la función transform.
  deshabilitado = input(false, {
    transform: (value: boolean | string) => (typeof value === 'string') ? value === '' : value
  })

  // Esto no es un input es un signal.
  // La variable texto es reactiva, lo que significa que cualquier cambio en su valor se reflejará automáticamente en cualquier parte de la aplicación que dependa de esta señal.
  texto = signal<string>(`Conocido en el mundo de la tecnología por su habilidad para transformar ideas complejas en soluciones simples y elegantes. Desde niño, su curiosidad por las computadoras lo llevó a desarmar y armar cada dispositivo que encontraba. A los quince años, ya había creado su primera aplicación móvil, una herramienta que ayudaba a sus compañeros de escuela a organizar sus tareas y proyectos.`);
}
