import {Component, Input} from '@angular/core';
import {TreeNode} from '../../types/treeNode';
import {NodeTypes} from '../../types/nodeTypes';

@Component({
  standalone: true,
  imports: [],
  selector: 'treeNode',
  templateUrl: './treeNodeComponent.html',
  styleUrls: ['./treeNodeComponent.css']
})
export class TreeNodeComponent {
  @Input() node!: TreeNode;
  @Input() type!: NodeTypes;
  @Input() isExpanded: boolean = false;

  get hasChildren(): boolean {
    return !!this.node?.children?.length;
  }

  get isFirstType() {
    return this.type === NodeTypes.first;
  }

  get isSecondType() {
    return this.type === NodeTypes.second;
  }

  toggleExpanded() {
    this.isExpanded = !this.isExpanded;
    if (this.isFirstType)
    {
      console.log(`нажали на узел ID ${this.node.id}`);
    }
  }
}
