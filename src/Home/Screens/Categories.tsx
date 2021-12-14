import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Category from '../Components/Category';
import { categories } from "../Components/offers";

interface CategoriesProps {}


const Categories = (props: CategoriesProps) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>

      {categories.map((categories) => (
        <Category key={categories.id} category={categories} />
      ))}
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {}
});
