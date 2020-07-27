// Code generated by furo-proto-gen. DO NOT EDIT.

// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.21.0-devel
// 	protoc        v3.11.4
// source: universaltest/universaltest.proto

package universaltest

import (
	furo "../furo"
	fat "../furo/fat"
	protobuf "../google/protobuf"
	proto "github.com/golang/protobuf/proto"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// This is a compile-time assertion that a sufficiently up-to-date version
// of the legacy proto package is being used.
const _ = proto.ProtoPackageIsVersion4

// oneof experiment spec for testing
type Universaltest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// field of a fat int32 for the Universaltest
	FatInt32 *fat.Int32 `protobuf:"bytes,7,opt,name=fat_int32,json=fatInt32,proto3" json:"fat_int32,omitempty"`
	// field of a fat string for the Universaltest
	FatString *fat.String `protobuf:"bytes,4,opt,name=fat_string,json=fatString,proto3" json:"fat_string,omitempty"`
	// field of a fat string for the Universaltest
	FatStringList *fat.String `protobuf:"bytes,8,opt,name=fat_string_list,json=fatStringList,proto3" json:"fat_string_list,omitempty"`
	// Identity of a universaltes type
	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	// field of a scalar int32 for the Universaltest
	ScalarInt32 int32 `protobuf:"varint,5,opt,name=scalar_int32,json=scalarInt32,proto3" json:"scalar_int32,omitempty"`
	// field of a scalar string for the Universaltest
	ScalarString string `protobuf:"bytes,2,opt,name=scalar_string,json=scalarString,proto3" json:"scalar_string,omitempty"`
	// field of a wrapper int32 for the Universaltest
	WrapperInt32 *protobuf.Int32Value `protobuf:"bytes,6,opt,name=wrapper_int32,json=wrapperInt32,proto3" json:"wrapper_int32,omitempty"`
	// field of a wrapper string for the Universaltest
	WrapperString *protobuf.StringValue `protobuf:"bytes,3,opt,name=wrapper_string,json=wrapperString,proto3" json:"wrapper_string,omitempty"`
}

func (x *Universaltest) Reset() {
	*x = Universaltest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_universaltest_universaltest_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Universaltest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Universaltest) ProtoMessage() {}

func (x *Universaltest) ProtoReflect() protoreflect.Message {
	mi := &file_universaltest_universaltest_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Universaltest.ProtoReflect.Descriptor instead.
func (*Universaltest) Descriptor() ([]byte, []int) {
	return file_universaltest_universaltest_proto_rawDescGZIP(), []int{0}
}

func (x *Universaltest) GetFatInt32() *fat.Int32 {
	if x != nil {
		return x.FatInt32
	}
	return nil
}

func (x *Universaltest) GetFatString() *fat.String {
	if x != nil {
		return x.FatString
	}
	return nil
}

func (x *Universaltest) GetFatStringList() *fat.String {
	if x != nil {
		return x.FatStringList
	}
	return nil
}

func (x *Universaltest) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Universaltest) GetScalarInt32() int32 {
	if x != nil {
		return x.ScalarInt32
	}
	return 0
}

func (x *Universaltest) GetScalarString() string {
	if x != nil {
		return x.ScalarString
	}
	return ""
}

func (x *Universaltest) GetWrapperInt32() *protobuf.Int32Value {
	if x != nil {
		return x.WrapperInt32
	}
	return nil
}

func (x *Universaltest) GetWrapperString() *protobuf.StringValue {
	if x != nil {
		return x.WrapperString
	}
	return nil
}

// UniversaltestEntity with Universaltest type in data
type UniversaltestEntity struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// contains a universaltest.Universaltest
	Data *Universaltest `protobuf:"bytes,1,opt,name=data,proto3" json:"data,omitempty"`
	// Hateoas links
	Links []*furo.Link `protobuf:"bytes,2,rep,name=links,proto3" json:"links,omitempty"`
	// Meta for the response
	Meta *furo.Meta `protobuf:"bytes,3,opt,name=meta,proto3" json:"meta,omitempty"`
}

func (x *UniversaltestEntity) Reset() {
	*x = UniversaltestEntity{}
	if protoimpl.UnsafeEnabled {
		mi := &file_universaltest_universaltest_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UniversaltestEntity) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UniversaltestEntity) ProtoMessage() {}

func (x *UniversaltestEntity) ProtoReflect() protoreflect.Message {
	mi := &file_universaltest_universaltest_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UniversaltestEntity.ProtoReflect.Descriptor instead.
func (*UniversaltestEntity) Descriptor() ([]byte, []int) {
	return file_universaltest_universaltest_proto_rawDescGZIP(), []int{1}
}

func (x *UniversaltestEntity) GetData() *Universaltest {
	if x != nil {
		return x.Data
	}
	return nil
}

func (x *UniversaltestEntity) GetLinks() []*furo.Link {
	if x != nil {
		return x.Links
	}
	return nil
}

func (x *UniversaltestEntity) GetMeta() *furo.Meta {
	if x != nil {
		return x.Meta
	}
	return nil
}

var File_universaltest_universaltest_proto protoreflect.FileDescriptor

var file_universaltest_universaltest_proto_rawDesc = []byte{
	0x0a, 0x21, 0x75, 0x6e, 0x69, 0x76, 0x65, 0x72, 0x73, 0x61, 0x6c, 0x74, 0x65, 0x73, 0x74, 0x2f,
	0x75, 0x6e, 0x69, 0x76, 0x65, 0x72, 0x73, 0x61, 0x6c, 0x74, 0x65, 0x73, 0x74, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x12, 0x0d, 0x75, 0x6e, 0x69, 0x76, 0x65, 0x72, 0x73, 0x61, 0x6c, 0x74, 0x65,
	0x73, 0x74, 0x1a, 0x1e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x62, 0x75, 0x66, 0x2f, 0x77, 0x72, 0x61, 0x70, 0x70, 0x65, 0x72, 0x73, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x1a, 0x12, 0x66, 0x75, 0x72, 0x6f, 0x2f, 0x66, 0x61, 0x74, 0x2f, 0x66, 0x61, 0x74,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x0f, 0x66, 0x75, 0x72, 0x6f, 0x2f, 0x6d, 0x65, 0x74,
	0x61, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x0f, 0x66, 0x75, 0x72, 0x6f, 0x2f, 0x6c, 0x69,
	0x6e, 0x6b, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x87, 0x03, 0x0a, 0x0d, 0x55, 0x6e, 0x69,
	0x76, 0x65, 0x72, 0x73, 0x61, 0x6c, 0x74, 0x65, 0x73, 0x74, 0x12, 0x2c, 0x0a, 0x09, 0x66, 0x61,
	0x74, 0x5f, 0x69, 0x6e, 0x74, 0x33, 0x32, 0x18, 0x07, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0f, 0x2e,
	0x66, 0x75, 0x72, 0x6f, 0x2e, 0x66, 0x61, 0x74, 0x2e, 0x49, 0x6e, 0x74, 0x33, 0x32, 0x52, 0x08,
	0x66, 0x61, 0x74, 0x49, 0x6e, 0x74, 0x33, 0x32, 0x12, 0x2f, 0x0a, 0x0a, 0x66, 0x61, 0x74, 0x5f,
	0x73, 0x74, 0x72, 0x69, 0x6e, 0x67, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x10, 0x2e, 0x66,
	0x75, 0x72, 0x6f, 0x2e, 0x66, 0x61, 0x74, 0x2e, 0x53, 0x74, 0x72, 0x69, 0x6e, 0x67, 0x52, 0x09,
	0x66, 0x61, 0x74, 0x53, 0x74, 0x72, 0x69, 0x6e, 0x67, 0x12, 0x38, 0x0a, 0x0f, 0x66, 0x61, 0x74,
	0x5f, 0x73, 0x74, 0x72, 0x69, 0x6e, 0x67, 0x5f, 0x6c, 0x69, 0x73, 0x74, 0x18, 0x08, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x10, 0x2e, 0x66, 0x75, 0x72, 0x6f, 0x2e, 0x66, 0x61, 0x74, 0x2e, 0x53, 0x74,
	0x72, 0x69, 0x6e, 0x67, 0x52, 0x0d, 0x66, 0x61, 0x74, 0x53, 0x74, 0x72, 0x69, 0x6e, 0x67, 0x4c,
	0x69, 0x73, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x02, 0x69, 0x64, 0x12, 0x21, 0x0a, 0x0c, 0x73, 0x63, 0x61, 0x6c, 0x61, 0x72, 0x5f, 0x69, 0x6e,
	0x74, 0x33, 0x32, 0x18, 0x05, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0b, 0x73, 0x63, 0x61, 0x6c, 0x61,
	0x72, 0x49, 0x6e, 0x74, 0x33, 0x32, 0x12, 0x23, 0x0a, 0x0d, 0x73, 0x63, 0x61, 0x6c, 0x61, 0x72,
	0x5f, 0x73, 0x74, 0x72, 0x69, 0x6e, 0x67, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0c, 0x73,
	0x63, 0x61, 0x6c, 0x61, 0x72, 0x53, 0x74, 0x72, 0x69, 0x6e, 0x67, 0x12, 0x40, 0x0a, 0x0d, 0x77,
	0x72, 0x61, 0x70, 0x70, 0x65, 0x72, 0x5f, 0x69, 0x6e, 0x74, 0x33, 0x32, 0x18, 0x06, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x1b, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x62, 0x75, 0x66, 0x2e, 0x49, 0x6e, 0x74, 0x33, 0x32, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52,
	0x0c, 0x77, 0x72, 0x61, 0x70, 0x70, 0x65, 0x72, 0x49, 0x6e, 0x74, 0x33, 0x32, 0x12, 0x43, 0x0a,
	0x0e, 0x77, 0x72, 0x61, 0x70, 0x70, 0x65, 0x72, 0x5f, 0x73, 0x74, 0x72, 0x69, 0x6e, 0x67, 0x18,
	0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1c, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x53, 0x74, 0x72, 0x69, 0x6e, 0x67, 0x56, 0x61,
	0x6c, 0x75, 0x65, 0x52, 0x0d, 0x77, 0x72, 0x61, 0x70, 0x70, 0x65, 0x72, 0x53, 0x74, 0x72, 0x69,
	0x6e, 0x67, 0x22, 0x89, 0x01, 0x0a, 0x13, 0x55, 0x6e, 0x69, 0x76, 0x65, 0x72, 0x73, 0x61, 0x6c,
	0x74, 0x65, 0x73, 0x74, 0x45, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x12, 0x30, 0x0a, 0x04, 0x64, 0x61,
	0x74, 0x61, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1c, 0x2e, 0x75, 0x6e, 0x69, 0x76, 0x65,
	0x72, 0x73, 0x61, 0x6c, 0x74, 0x65, 0x73, 0x74, 0x2e, 0x55, 0x6e, 0x69, 0x76, 0x65, 0x72, 0x73,
	0x61, 0x6c, 0x74, 0x65, 0x73, 0x74, 0x52, 0x04, 0x64, 0x61, 0x74, 0x61, 0x12, 0x20, 0x0a, 0x05,
	0x6c, 0x69, 0x6e, 0x6b, 0x73, 0x18, 0x02, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x0a, 0x2e, 0x66, 0x75,
	0x72, 0x6f, 0x2e, 0x4c, 0x69, 0x6e, 0x6b, 0x52, 0x05, 0x6c, 0x69, 0x6e, 0x6b, 0x73, 0x12, 0x1e,
	0x0a, 0x04, 0x6d, 0x65, 0x74, 0x61, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0a, 0x2e, 0x66,
	0x75, 0x72, 0x6f, 0x2e, 0x4d, 0x65, 0x74, 0x61, 0x52, 0x04, 0x6d, 0x65, 0x74, 0x61, 0x62, 0x06,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_universaltest_universaltest_proto_rawDescOnce sync.Once
	file_universaltest_universaltest_proto_rawDescData = file_universaltest_universaltest_proto_rawDesc
)

func file_universaltest_universaltest_proto_rawDescGZIP() []byte {
	file_universaltest_universaltest_proto_rawDescOnce.Do(func() {
		file_universaltest_universaltest_proto_rawDescData = protoimpl.X.CompressGZIP(file_universaltest_universaltest_proto_rawDescData)
	})
	return file_universaltest_universaltest_proto_rawDescData
}

var file_universaltest_universaltest_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_universaltest_universaltest_proto_goTypes = []interface{}{
	(*Universaltest)(nil),        // 0: universaltest.Universaltest
	(*UniversaltestEntity)(nil),  // 1: universaltest.UniversaltestEntity
	(*fat.Int32)(nil),            // 2: furo.fat.Int32
	(*fat.String)(nil),           // 3: furo.fat.String
	(*protobuf.Int32Value)(nil),  // 4: google.protobuf.Int32Value
	(*protobuf.StringValue)(nil), // 5: google.protobuf.StringValue
	(*furo.Link)(nil),            // 6: furo.Link
	(*furo.Meta)(nil),            // 7: furo.Meta
}
var file_universaltest_universaltest_proto_depIdxs = []int32{
	2, // 0: universaltest.Universaltest.fat_int32:type_name -> furo.fat.Int32
	3, // 1: universaltest.Universaltest.fat_string:type_name -> furo.fat.String
	3, // 2: universaltest.Universaltest.fat_string_list:type_name -> furo.fat.String
	4, // 3: universaltest.Universaltest.wrapper_int32:type_name -> google.protobuf.Int32Value
	5, // 4: universaltest.Universaltest.wrapper_string:type_name -> google.protobuf.StringValue
	0, // 5: universaltest.UniversaltestEntity.data:type_name -> universaltest.Universaltest
	6, // 6: universaltest.UniversaltestEntity.links:type_name -> furo.Link
	7, // 7: universaltest.UniversaltestEntity.meta:type_name -> furo.Meta
	8, // [8:8] is the sub-list for method output_type
	8, // [8:8] is the sub-list for method input_type
	8, // [8:8] is the sub-list for extension type_name
	8, // [8:8] is the sub-list for extension extendee
	0, // [0:8] is the sub-list for field type_name
}

func init() { file_universaltest_universaltest_proto_init() }
func file_universaltest_universaltest_proto_init() {
	if File_universaltest_universaltest_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_universaltest_universaltest_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Universaltest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_universaltest_universaltest_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UniversaltestEntity); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_universaltest_universaltest_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_universaltest_universaltest_proto_goTypes,
		DependencyIndexes: file_universaltest_universaltest_proto_depIdxs,
		MessageInfos:      file_universaltest_universaltest_proto_msgTypes,
	}.Build()
	File_universaltest_universaltest_proto = out.File
	file_universaltest_universaltest_proto_rawDesc = nil
	file_universaltest_universaltest_proto_goTypes = nil
	file_universaltest_universaltest_proto_depIdxs = nil
}