import { CallableFunctionName } from "@adopt-a-student/common";
import { FirebaseFunctions } from ".";

interface Props<D> {
  data: D;
  functions: FirebaseFunctions;
  name: CallableFunctionName;

  // todo  fix this import from api CallableFunctionName;
}

export default async function callFirebaseFunction<D = any, R = any>({
  data,
  functions,
  name,
}: Props<D>): Promise<R> {
  return (await functions.httpsCallable(name as string)(data)).data as R;
}
