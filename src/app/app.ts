import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

type InfoCard = {
  readonly badge: string;
  readonly title: string;
  readonly description: string;
};

type PipelineStep = {
  readonly title: string;
  readonly detail: string;
  readonly command: string;
};

type StackItem = {
  readonly label: string;
  readonly value: string;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly projectName = signal('Base Angular para CI/CD');

  protected readonly stackItems = signal<readonly StackItem[]>([
    { label: 'Angular', value: '21' },
    { label: 'Estilos', value: 'SCSS' },
    { label: 'Tests', value: 'Vitest' },
    { label: 'Deploy', value: 'Docker' },
  ]);

  protected readonly infoCards = signal<readonly InfoCard[]>([
    {
      badge: 'UI',
      title: 'Landing simple y editable',
      description:
        'La base visual es pequeña, clara y lista para cambiar textos, secciones o llamados a la accion sin rehacer el proyecto.',
    },
    {
      badge: 'QA',
      title: 'Pruebas unitarias incluidas',
      description:
        'El proyecto ya valida que la landing renderice el contenido clave, lo que permite detectar roturas temprano en CI.',
    },
    {
      badge: 'Build',
      title: 'Compilacion productiva lista',
      description:
        'El build genera artefactos optimizados en dist para publicar en hosting estatico o empaquetar en contenedor.',
    },
    {
      badge: 'Entrega',
      title: 'Camino neutral para despliegue',
      description:
        'La app puede ejecutarse en cualquier pipeline que soporte npm y Docker, sin acoplarla a un proveedor concreto.',
    },
  ]);

  protected readonly pipelineSteps = signal<readonly PipelineStep[]>([
    {
      title: 'Instalar dependencias',
      detail: 'Usa npm ci para instalaciones limpias y reproducibles dentro del pipeline.',
      command: 'npm ci',
    },
    {
      title: 'Validar formato',
      detail: 'Prettier permite rechazar cambios inconsistentes antes de compilar o desplegar.',
      command: 'npm run format:check',
    },
    {
      title: 'Ejecutar pruebas',
      detail:
        'La suite corre en modo no interactivo para automatizar validaciones en cada push o release.',
      command: 'npm run test:ci',
    },
    {
      title: 'Generar artefacto final',
      detail:
        'El build de Angular deja la salida lista para publicar como sitio estatico o dentro de Docker.',
      command: 'npm run build',
    },
  ]);

  protected readonly extensionPoints = signal<readonly string[]>([
    'Agregar nuevas rutas o modulos sin romper la landing inicial.',
    'Incorporar e2e, analisis de seguridad o pruebas de performance.',
    'Integrar despliegues por entornos usando variables y secretos del proveedor que elijas.',
  ]);

  protected readonly pipelineSummary = computed(
    () => `${this.pipelineSteps().length} pasos listos para automatizar`,
  );
}
