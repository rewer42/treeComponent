export interface TreeNode {
  id: number;
  title: string;
  is_deleted: boolean;
  children: TreeNode[];
  deleted_at?: Date | null;
}
