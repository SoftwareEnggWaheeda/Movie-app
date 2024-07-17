import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import CustomIcon from './CustomIcon';

const InputHeader = (props: any) => {
  const [searchText, setSearchText] = useState<string>('');
  return (
    <View style={styles.inputBox}>
        <TouchableOpacity
        style={styles.searchIcon}
        onPress={() => props.searchFunction(searchText)}>
        <CustomIcon
          name="search"
          color={COLORS.White}
          size={FONTSIZE.size_20}
        />
      </TouchableOpacity>
      <TextInput
        style={styles.textInput}
        onChangeText={textInput => setSearchText(textInput)}
        value={searchText}
        placeholder="TV shows, movies and more"
        placeholderTextColor={COLORS.WhiteRGBA32}
      />
    
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    display: 'flex',
    paddingVertical: SPACING.space_4,
    paddingHorizontal: SPACING.space_32,
    borderWidth: 1,
    borderColor: COLORS.WhiteRGBA14,
    borderRadius: 90,
    flexDirection: 'row',
  },
  textInput: {
    width: '100%',
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.WhiteRGBA14,
  },
  searchIcon: {
    alignItems: 'center',
    justifyContent:'space-between',
    padding: SPACING.space_10,
   marginLeft:-10
  },
});

export default InputHeader;
