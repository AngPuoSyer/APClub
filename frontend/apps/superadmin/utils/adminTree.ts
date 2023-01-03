import { isEmpty } from "lodash";
import { OrganizationChartNode } from "primevue/organizationchart";

export class AdminTree<DataType> implements OrganizationChartNode {
  [key: string]: any;
  key: any;
  type?: string | undefined;
  styleClass?: string | undefined;
  data: DataType;
  selectable?: boolean | undefined = false;
  collapsible?: boolean | undefined = false;
  children?: AdminTree<DataType>[] = [];

  constructor(key: string, data: DataType) {
    this.key = key;
    this.data = data;
  }

  addChildren(key: string, data: DataType) {
    this.children?.push(new AdminTree(key, data));
  }

  depthFirstSearch(
    cb: (a: DataType) => boolean
  ): AdminTree<DataType> | undefined {
    if (isEmpty(this.children)) return;
    const found = this.children?.find((admin) => {
      return cb(admin.data);
    });
    if (found) return found;
    for (const node of this.children!) {
      return node.depthFirstSearch(cb);
    }
  }

  addToParent(key: string, data: DataType, cb: (a: DataType) => boolean) {
    const node = this.depthFirstSearch(cb);
    if (!node) return this.addChildren(key, data);
    node.addChildren(key, data);
  }
}
