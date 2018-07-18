import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tootip',
  templateUrl: './tootip.component.html',
  styleUrls: ['./tootip.component.scss']
})
export class TootipComponent {


  /**
   * Texto para exibição dentro do hint
   */
  @Input() message: string;

  /**
   * Flag utilizada para quando o input for utilizado dentro de um card
   */
  @Input() insideCard: false;

  /**
   * Flag utilizada o input sem o card;
   */
  @Input() noCard: false;

  /**
   * Id para acessiblidade
   */
  @Input() id: string;

  /**
   * Faz o alinhamento dinamico da seta sempre no meio do elemento pai.
   */
  @Input() hasDynamicArrow: string;

  /**
   * Faz o alinhamento do hint para baixo
   */
  @Input() reverseHintPosition = false;

  /**
   * Elemento foco do tooltip.
   */
  @Input() currentElement = '';

}
