// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  ListRenderItemInfo,
} from "react-native";

type listInfo = {
  text: string;
};

export function ListScreen() {
  //テストデータ（初期値として使用しました）
  const listContent = [
    { text: "test1" },
    { text: "test2" },
    { text: "test3" },
    { text: "test4" },
  ];
  //List更新用のState
  const [list, setList] = useState(listContent);

  //ボタンを押したときにListの配列に要素追加してsetListで更新する関数。
  const addList = (list: listInfo[]) => {
    const array: listInfo = { text: `test${list.length + 1}` };
    const newList = list.concat(array);
    setList(newList);
  };

  return (
    <View style={styles.container}>
      <Button
        title="add List"
        onPress={() => {
          addList(list);
        }}
      />
      <FlatList
        data={list}
        renderItem={(item: ListRenderItemInfo<listInfo>) => {
          return <Text style={styles.listItem}>{item.item.text}</Text>;
        }}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  ListStyle: {},
  listItem: {
    fontSize: 18,
    padding: 10,
    borderWidth: 1,
  },
});
