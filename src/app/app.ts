import { Component, signal } from '@angular/core';
import {treeNodes} from '../assets/treeNodes';
import {TreeNode} from '../types/treeNode';
import {TreeNodeComponent} from '../components/treeNode/treeNodeComponent';
import {NodeTypes} from '../types/nodeTypes';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [
    TreeNodeComponent
  ],
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('treeComponent');
  firstTree!: TreeNode;
  secondTree!: TreeNode;
  ngOnInit(): void {
    this.firstTree = treeNodes[0];
    this.secondTree = treeNodes[1];
  }

  protected readonly NodeTypes = NodeTypes;
}
