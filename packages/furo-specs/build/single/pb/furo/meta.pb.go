// Code generated by protoc-gen-go. DO NOT EDIT.
// source: furo/meta.proto

package furo

import (
	protobuf "../google/protobuf"
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

// fields of meta info
type MetaField struct {
	// constraints for a field
	Constraints map[string]*FieldConstraint `protobuf:"bytes,2,rep,name=constraints,proto3" json:"constraints,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	// meta information of a field
	Meta                 *FieldMeta `protobuf:"bytes,1,opt,name=meta,proto3" json:"meta,omitempty"`
	XXX_NoUnkeyedLiteral struct{}   `json:"-"`
	XXX_unrecognized     []byte     `json:"-"`
	XXX_sizecache        int32      `json:"-"`
}

func (m *MetaField) Reset()         { *m = MetaField{} }
func (m *MetaField) String() string { return proto.CompactTextString(m) }
func (*MetaField) ProtoMessage()    {}
func (*MetaField) Descriptor() ([]byte, []int) {
	return fileDescriptor_16348e1ffea5108d, []int{0}
}

func (m *MetaField) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_MetaField.Unmarshal(m, b)
}
func (m *MetaField) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_MetaField.Marshal(b, m, deterministic)
}
func (m *MetaField) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MetaField.Merge(m, src)
}
func (m *MetaField) XXX_Size() int {
	return xxx_messageInfo_MetaField.Size(m)
}
func (m *MetaField) XXX_DiscardUnknown() {
	xxx_messageInfo_MetaField.DiscardUnknown(m)
}

var xxx_messageInfo_MetaField proto.InternalMessageInfo

func (m *MetaField) GetConstraints() map[string]*FieldConstraint {
	if m != nil {
		return m.Constraints
	}
	return nil
}

func (m *MetaField) GetMeta() *FieldMeta {
	if m != nil {
		return m.Meta
	}
	return nil
}

// Items for fieldoption.list
type Optionitem struct {
	// String representation
	DisplayName string `protobuf:"bytes,2,opt,name=display_name,json=displayName,proto3" json:"display_name,omitempty"`
	// Id
	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	// is the item selected
	Selected             bool     `protobuf:"varint,3,opt,name=selected,proto3" json:"selected,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Optionitem) Reset()         { *m = Optionitem{} }
func (m *Optionitem) String() string { return proto.CompactTextString(m) }
func (*Optionitem) ProtoMessage()    {}
func (*Optionitem) Descriptor() ([]byte, []int) {
	return fileDescriptor_16348e1ffea5108d, []int{1}
}

func (m *Optionitem) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Optionitem.Unmarshal(m, b)
}
func (m *Optionitem) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Optionitem.Marshal(b, m, deterministic)
}
func (m *Optionitem) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Optionitem.Merge(m, src)
}
func (m *Optionitem) XXX_Size() int {
	return xxx_messageInfo_Optionitem.Size(m)
}
func (m *Optionitem) XXX_DiscardUnknown() {
	xxx_messageInfo_Optionitem.DiscardUnknown(m)
}

var xxx_messageInfo_Optionitem proto.InternalMessageInfo

func (m *Optionitem) GetDisplayName() string {
	if m != nil {
		return m.DisplayName
	}
	return ""
}

func (m *Optionitem) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

func (m *Optionitem) GetSelected() bool {
	if m != nil {
		return m.Selected
	}
	return false
}

// Metas for a field
type Fieldoption struct {
	// a list with options, use furo.optionitem or your own
	List                 []*protobuf.Any `protobuf:"bytes,1,rep,name=list,proto3" json:"list,omitempty"`
	XXX_NoUnkeyedLiteral struct{}        `json:"-"`
	XXX_unrecognized     []byte          `json:"-"`
	XXX_sizecache        int32           `json:"-"`
}

func (m *Fieldoption) Reset()         { *m = Fieldoption{} }
func (m *Fieldoption) String() string { return proto.CompactTextString(m) }
func (*Fieldoption) ProtoMessage()    {}
func (*Fieldoption) Descriptor() ([]byte, []int) {
	return fileDescriptor_16348e1ffea5108d, []int{2}
}

func (m *Fieldoption) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Fieldoption.Unmarshal(m, b)
}
func (m *Fieldoption) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Fieldoption.Marshal(b, m, deterministic)
}
func (m *Fieldoption) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Fieldoption.Merge(m, src)
}
func (m *Fieldoption) XXX_Size() int {
	return xxx_messageInfo_Fieldoption.Size(m)
}
func (m *Fieldoption) XXX_DiscardUnknown() {
	xxx_messageInfo_Fieldoption.DiscardUnknown(m)
}

var xxx_messageInfo_Fieldoption proto.InternalMessageInfo

func (m *Fieldoption) GetList() []*protobuf.Any {
	if m != nil {
		return m.List
	}
	return nil
}

// meta info
type Meta struct {
	// fields of meta info
	Fields               map[string]*MetaField `protobuf:"bytes,1,rep,name=fields,proto3" json:"fields,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	XXX_NoUnkeyedLiteral struct{}              `json:"-"`
	XXX_unrecognized     []byte                `json:"-"`
	XXX_sizecache        int32                 `json:"-"`
}

func (m *Meta) Reset()         { *m = Meta{} }
func (m *Meta) String() string { return proto.CompactTextString(m) }
func (*Meta) ProtoMessage()    {}
func (*Meta) Descriptor() ([]byte, []int) {
	return fileDescriptor_16348e1ffea5108d, []int{3}
}

func (m *Meta) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Meta.Unmarshal(m, b)
}
func (m *Meta) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Meta.Marshal(b, m, deterministic)
}
func (m *Meta) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Meta.Merge(m, src)
}
func (m *Meta) XXX_Size() int {
	return xxx_messageInfo_Meta.Size(m)
}
func (m *Meta) XXX_DiscardUnknown() {
	xxx_messageInfo_Meta.DiscardUnknown(m)
}

var xxx_messageInfo_Meta proto.InternalMessageInfo

func (m *Meta) GetFields() map[string]*MetaField {
	if m != nil {
		return m.Fields
	}
	return nil
}

// Metas for a field
type FieldMeta struct {
	// The default value as JSON string
	Default string `protobuf:"bytes,3,opt,name=default,proto3" json:"default,omitempty"`
	// A hint
	Hint string `protobuf:"bytes,2,opt,name=hint,proto3" json:"hint,omitempty"`
	// The label
	Label string `protobuf:"bytes,1,opt,name=label,proto3" json:"label,omitempty"`
	// Fieldoptions
	Options *Fieldoption `protobuf:"bytes,6,opt,name=options,proto3" json:"options,omitempty"`
	// readonly
	Readonly bool `protobuf:"varint,4,opt,name=readonly,proto3" json:"readonly,omitempty"`
	// repeated
	Repeated bool `protobuf:"varint,5,opt,name=repeated,proto3" json:"repeated,omitempty"`
	// Put in type specific metas for your fields here
	Typespecific         *protobuf.Any `protobuf:"bytes,7,opt,name=typespecific,proto3" json:"typespecific,omitempty"`
	XXX_NoUnkeyedLiteral struct{}      `json:"-"`
	XXX_unrecognized     []byte        `json:"-"`
	XXX_sizecache        int32         `json:"-"`
}

func (m *FieldMeta) Reset()         { *m = FieldMeta{} }
func (m *FieldMeta) String() string { return proto.CompactTextString(m) }
func (*FieldMeta) ProtoMessage()    {}
func (*FieldMeta) Descriptor() ([]byte, []int) {
	return fileDescriptor_16348e1ffea5108d, []int{4}
}

func (m *FieldMeta) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_FieldMeta.Unmarshal(m, b)
}
func (m *FieldMeta) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_FieldMeta.Marshal(b, m, deterministic)
}
func (m *FieldMeta) XXX_Merge(src proto.Message) {
	xxx_messageInfo_FieldMeta.Merge(m, src)
}
func (m *FieldMeta) XXX_Size() int {
	return xxx_messageInfo_FieldMeta.Size(m)
}
func (m *FieldMeta) XXX_DiscardUnknown() {
	xxx_messageInfo_FieldMeta.DiscardUnknown(m)
}

var xxx_messageInfo_FieldMeta proto.InternalMessageInfo

func (m *FieldMeta) GetDefault() string {
	if m != nil {
		return m.Default
	}
	return ""
}

func (m *FieldMeta) GetHint() string {
	if m != nil {
		return m.Hint
	}
	return ""
}

func (m *FieldMeta) GetLabel() string {
	if m != nil {
		return m.Label
	}
	return ""
}

func (m *FieldMeta) GetOptions() *Fieldoption {
	if m != nil {
		return m.Options
	}
	return nil
}

func (m *FieldMeta) GetReadonly() bool {
	if m != nil {
		return m.Readonly
	}
	return false
}

func (m *FieldMeta) GetRepeated() bool {
	if m != nil {
		return m.Repeated
	}
	return false
}

func (m *FieldMeta) GetTypespecific() *protobuf.Any {
	if m != nil {
		return m.Typespecific
	}
	return nil
}

// a single fieldconstraint
type FieldConstraint struct {
	// the constraint value as string, even it is a number
	Is string `protobuf:"bytes,1,opt,name=is,proto3" json:"is,omitempty"`
	// The message to display on constraint violation
	Message              string   `protobuf:"bytes,2,opt,name=message,proto3" json:"message,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *FieldConstraint) Reset()         { *m = FieldConstraint{} }
func (m *FieldConstraint) String() string { return proto.CompactTextString(m) }
func (*FieldConstraint) ProtoMessage()    {}
func (*FieldConstraint) Descriptor() ([]byte, []int) {
	return fileDescriptor_16348e1ffea5108d, []int{5}
}

func (m *FieldConstraint) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_FieldConstraint.Unmarshal(m, b)
}
func (m *FieldConstraint) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_FieldConstraint.Marshal(b, m, deterministic)
}
func (m *FieldConstraint) XXX_Merge(src proto.Message) {
	xxx_messageInfo_FieldConstraint.Merge(m, src)
}
func (m *FieldConstraint) XXX_Size() int {
	return xxx_messageInfo_FieldConstraint.Size(m)
}
func (m *FieldConstraint) XXX_DiscardUnknown() {
	xxx_messageInfo_FieldConstraint.DiscardUnknown(m)
}

var xxx_messageInfo_FieldConstraint proto.InternalMessageInfo

func (m *FieldConstraint) GetIs() string {
	if m != nil {
		return m.Is
	}
	return ""
}

func (m *FieldConstraint) GetMessage() string {
	if m != nil {
		return m.Message
	}
	return ""
}

func init() {
	proto.RegisterType((*MetaField)(nil), "furo.MetaField")
	proto.RegisterMapType((map[string]*FieldConstraint)(nil), "furo.MetaField.ConstraintsEntry")
	proto.RegisterType((*Optionitem)(nil), "furo.Optionitem")
	proto.RegisterType((*Fieldoption)(nil), "furo.Fieldoption")
	proto.RegisterType((*Meta)(nil), "furo.Meta")
	proto.RegisterMapType((map[string]*MetaField)(nil), "furo.Meta.FieldsEntry")
	proto.RegisterType((*FieldMeta)(nil), "furo.FieldMeta")
	proto.RegisterType((*FieldConstraint)(nil), "furo.FieldConstraint")
}

func init() { proto.RegisterFile("furo/meta.proto", fileDescriptor_16348e1ffea5108d) }

var fileDescriptor_16348e1ffea5108d = []byte{
	// 451 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x74, 0x92, 0xcf, 0xaa, 0xd4, 0x30,
	0x14, 0xc6, 0x69, 0xa7, 0x33, 0x73, 0x7b, 0x7a, 0x71, 0xae, 0xe1, 0x2a, 0x71, 0x56, 0x63, 0x45,
	0x18, 0xb8, 0xd0, 0x81, 0xeb, 0xc2, 0x8b, 0xae, 0x54, 0x74, 0x21, 0xa8, 0x10, 0x70, 0xe5, 0x42,
	0x32, 0xd3, 0xd3, 0x31, 0x98, 0x26, 0xa5, 0xc9, 0x08, 0xdd, 0xfa, 0x7a, 0xbe, 0x8b, 0xcf, 0x20,
	0x49, 0xda, 0xf9, 0x87, 0x77, 0xd7, 0x93, 0xf3, 0x9d, 0xef, 0x6b, 0x7e, 0x27, 0x30, 0xab, 0x76,
	0xad, 0x5e, 0xd5, 0x68, 0x79, 0xd1, 0xb4, 0xda, 0x6a, 0x92, 0xb8, 0x83, 0xf9, 0x93, 0xad, 0xd6,
	0x5b, 0x89, 0x2b, 0x7f, 0xb6, 0xde, 0x55, 0x2b, 0xae, 0xba, 0x20, 0xc8, 0xff, 0x44, 0x90, 0x7e,
	0x42, 0xcb, 0x3f, 0x08, 0x94, 0x25, 0x79, 0x0b, 0xd9, 0x46, 0x2b, 0x63, 0x5b, 0x2e, 0x94, 0x35,
	0x34, 0x5e, 0x8c, 0x96, 0xd9, 0xed, 0xa2, 0x70, 0x26, 0xc5, 0x5e, 0x55, 0xbc, 0x3b, 0x48, 0xde,
	0x2b, 0xdb, 0x76, 0xec, 0x78, 0x88, 0x3c, 0x83, 0xc4, 0xfd, 0x00, 0x8d, 0x16, 0xd1, 0x32, 0xbb,
	0x9d, 0x85, 0x61, 0x3f, 0xe8, 0x1c, 0x98, 0x6f, 0xce, 0xbf, 0xc2, 0xd5, 0xb9, 0x0b, 0xb9, 0x82,
	0xd1, 0x4f, 0xec, 0xfc, 0x5c, 0xca, 0xdc, 0x27, 0xb9, 0x81, 0xf1, 0x2f, 0x2e, 0x77, 0x48, 0x63,
	0xef, 0xf5, 0xe8, 0xc8, 0xeb, 0x30, 0xcd, 0x82, 0xe6, 0x55, 0x7c, 0x17, 0xe5, 0xdf, 0x00, 0xbe,
	0x34, 0x56, 0x68, 0x25, 0x2c, 0xd6, 0xe4, 0x29, 0x5c, 0x96, 0xc2, 0x34, 0x92, 0x77, 0xdf, 0x15,
	0xaf, 0x83, 0x4b, 0xca, 0xb2, 0xfe, 0xec, 0x33, 0xaf, 0x91, 0x3c, 0x80, 0x58, 0x94, 0x7d, 0x64,
	0x2c, 0x4a, 0x32, 0x87, 0x0b, 0x83, 0x12, 0x37, 0x16, 0x4b, 0x3a, 0x5a, 0x44, 0xcb, 0x0b, 0xb6,
	0xaf, 0xf3, 0x97, 0x90, 0xf9, 0x68, 0xed, 0x13, 0xc8, 0x12, 0x12, 0x29, 0x8c, 0xa5, 0x91, 0x87,
	0x74, 0x5d, 0x04, 0xc6, 0xc5, 0xc0, 0xb8, 0x78, 0xa3, 0x3a, 0xe6, 0x15, 0xf9, 0xef, 0x08, 0x12,
	0x77, 0x77, 0x52, 0xc0, 0xa4, 0x72, 0x0e, 0xa6, 0x1f, 0x7a, 0x7c, 0x20, 0x1b, 0x6e, 0xd5, 0xf3,
	0xec, 0x55, 0xf3, 0x8f, 0x7d, 0xe2, 0xbd, 0x80, 0x9e, 0x9f, 0x02, 0x9a, 0x9d, 0x6d, 0xea, 0x18,
	0xcd, 0xdf, 0x08, 0xd2, 0xfd, 0x16, 0x08, 0x85, 0x69, 0x89, 0x15, 0xdf, 0x49, 0xeb, 0xaf, 0x99,
	0xb2, 0xa1, 0x24, 0x04, 0x92, 0x1f, 0x42, 0xd9, 0x1e, 0x96, 0xff, 0x26, 0xd7, 0x30, 0x96, 0x7c,
	0x8d, 0xb2, 0x8f, 0x0e, 0x05, 0xb9, 0x81, 0x69, 0x40, 0x61, 0xe8, 0xc4, 0xc7, 0x3f, 0x3c, 0xda,
	0x4f, 0xe8, 0xb0, 0x41, 0xe1, 0xc0, 0xb6, 0xc8, 0x4b, 0xad, 0x64, 0x47, 0x93, 0x00, 0x76, 0xa8,
	0x43, 0xaf, 0x41, 0xee, 0xa0, 0x8f, 0x87, 0x5e, 0xa8, 0xc9, 0x1d, 0x5c, 0xda, 0xae, 0x41, 0xd3,
	0xe0, 0x46, 0x54, 0x62, 0x43, 0xa7, 0x3e, 0xe9, 0xff, 0xb4, 0x4f, 0x94, 0xf9, 0x6b, 0x98, 0x9d,
	0xbd, 0x14, 0xbf, 0x6d, 0xb3, 0xdf, 0xb6, 0x71, 0x14, 0x6a, 0x34, 0x86, 0x6f, 0x87, 0xb7, 0x31,
	0x94, 0xeb, 0x89, 0x37, 0x7e, 0xf1, 0x2f, 0x00, 0x00, 0xff, 0xff, 0x6c, 0xcf, 0xaf, 0xc3, 0x51,
	0x03, 0x00, 0x00,
}
