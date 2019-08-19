// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: treeitem.proto

package tree

import (
	furo "../furo"
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
	io "io"
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
const _ = proto.GoGoProtoPackageIsVersion2 // please upgrade the proto package

// Item of the navigationtree
type Treeitem struct {
	// Children of this node
	Children []*Treeitem `protobuf:"bytes,10,rep,name=children,proto3" json:"children,omitempty"`
	// description of the node
	Description string `protobuf:"bytes,4,opt,name=description,proto3" json:"description,omitempty"`
	// String representation of the node
	DisplayName string `protobuf:"bytes,1,opt,name=display_name,json=displayName,proto3" json:"display_name,omitempty"`
	// if node has error
	HasError bool `protobuf:"varint,7,opt,name=has_error,json=hasError,proto3" json:"has_error,omitempty"`
	// icon of the node
	Icon string `protobuf:"bytes,5,opt,name=icon,proto3" json:"icon,omitempty"`
	// Id of the node
	Id string `protobuf:"bytes,2,opt,name=id,proto3" json:"id,omitempty"`
	// key words of the node
	KeyWords string `protobuf:"bytes,6,opt,name=key_words,json=keyWords,proto3" json:"key_words,omitempty"`
	// Deeplink information of this node
	Link *furo.Link `protobuf:"bytes,9,opt,name=link,proto3" json:"link,omitempty"`
	// node open or not
	Open bool `protobuf:"varint,8,opt,name=open,proto3" json:"open,omitempty"`
	// subtitle of the node
	Subtitle             string   `protobuf:"bytes,3,opt,name=subtitle,proto3" json:"subtitle,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Treeitem) Reset()         { *m = Treeitem{} }
func (m *Treeitem) String() string { return proto.CompactTextString(m) }
func (*Treeitem) ProtoMessage()    {}
func (*Treeitem) Descriptor() ([]byte, []int) {
	return fileDescriptor_ffafdff5a5eb082d, []int{0}
}
func (m *Treeitem) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Treeitem) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Treeitem.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalTo(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Treeitem) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Treeitem.Merge(m, src)
}
func (m *Treeitem) XXX_Size() int {
	return m.Size()
}
func (m *Treeitem) XXX_DiscardUnknown() {
	xxx_messageInfo_Treeitem.DiscardUnknown(m)
}

var xxx_messageInfo_Treeitem proto.InternalMessageInfo

func (m *Treeitem) GetChildren() []*Treeitem {
	if m != nil {
		return m.Children
	}
	return nil
}

func (m *Treeitem) GetDescription() string {
	if m != nil {
		return m.Description
	}
	return ""
}

func (m *Treeitem) GetDisplayName() string {
	if m != nil {
		return m.DisplayName
	}
	return ""
}

func (m *Treeitem) GetHasError() bool {
	if m != nil {
		return m.HasError
	}
	return false
}

func (m *Treeitem) GetIcon() string {
	if m != nil {
		return m.Icon
	}
	return ""
}

func (m *Treeitem) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

func (m *Treeitem) GetKeyWords() string {
	if m != nil {
		return m.KeyWords
	}
	return ""
}

func (m *Treeitem) GetLink() *furo.Link {
	if m != nil {
		return m.Link
	}
	return nil
}

func (m *Treeitem) GetOpen() bool {
	if m != nil {
		return m.Open
	}
	return false
}

func (m *Treeitem) GetSubtitle() string {
	if m != nil {
		return m.Subtitle
	}
	return ""
}

func init() {
	proto.RegisterType((*Treeitem)(nil), "tree.Treeitem")
}

func init() { proto.RegisterFile("treeitem.proto", fileDescriptor_ffafdff5a5eb082d) }

var fileDescriptor_ffafdff5a5eb082d = []byte{
	// 279 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x4c, 0x90, 0xc1, 0x4a, 0xc4, 0x30,
	0x10, 0x86, 0x49, 0xb7, 0xae, 0xd9, 0xd9, 0x65, 0x85, 0x9c, 0xc2, 0x0a, 0xa5, 0x7a, 0x2a, 0x1e,
	0x2a, 0xac, 0x6f, 0x20, 0x78, 0x13, 0x0f, 0x45, 0xf0, 0x58, 0xba, 0xcd, 0x48, 0x43, 0xdb, 0xa4,
	0x24, 0x59, 0xa4, 0x8f, 0xe4, 0x9b, 0x78, 0xf4, 0x11, 0xa4, 0x4f, 0x22, 0x49, 0x77, 0xc5, 0xdb,
	0x7c, 0x5f, 0xfe, 0x99, 0x61, 0x02, 0x5b, 0x67, 0x10, 0xa5, 0xc3, 0x3e, 0x1f, 0x8c, 0x76, 0x9a,
	0xc5, 0x9e, 0x77, 0x57, 0xef, 0x47, 0xa3, 0xef, 0x3b, 0xa9, 0xda, 0x59, 0xdf, 0x7e, 0x46, 0x40,
	0x5f, 0x4f, 0x49, 0x76, 0x07, 0xb4, 0x6e, 0x64, 0x27, 0x0c, 0x2a, 0x0e, 0xe9, 0x22, 0x5b, 0xef,
	0xb7, 0xb9, 0x6f, 0xcb, 0xcf, 0x89, 0xe2, 0xef, 0x9d, 0xa5, 0xb0, 0x16, 0x68, 0x6b, 0x23, 0x07,
	0x27, 0xb5, 0xe2, 0x71, 0x4a, 0xb2, 0x55, 0xf1, 0x5f, 0xb1, 0x1b, 0xd8, 0x08, 0x69, 0x87, 0xae,
	0x1a, 0x4b, 0x55, 0xf5, 0xc8, 0xc9, 0x29, 0x32, 0xbb, 0x97, 0xaa, 0x47, 0x76, 0x0d, 0xab, 0xa6,
	0xb2, 0x25, 0x1a, 0xa3, 0x0d, 0xbf, 0x4c, 0x49, 0x46, 0x0b, 0xda, 0x54, 0xf6, 0xc9, 0x33, 0x63,
	0x10, 0xcb, 0x5a, 0x2b, 0x7e, 0x11, 0xfa, 0x42, 0xcd, 0xb6, 0x10, 0x49, 0xc1, 0xa3, 0x60, 0x22,
	0x29, 0xfc, 0x80, 0x16, 0xc7, 0xf2, 0x43, 0x1b, 0x61, 0xf9, 0x32, 0x68, 0xda, 0xe2, 0xf8, 0xe6,
	0x99, 0x25, 0x10, 0xfb, 0x4b, 0xf9, 0x2a, 0x25, 0xd9, 0x7a, 0x0f, 0xb9, 0xbf, 0x3d, 0x7f, 0x96,
	0xaa, 0x2d, 0x82, 0xf7, 0x0b, 0xf4, 0x80, 0x8a, 0xd3, 0xb0, 0x38, 0xd4, 0x6c, 0x07, 0xd4, 0x1e,
	0x0f, 0x4e, 0xba, 0x0e, 0xf9, 0x62, 0x9e, 0x77, 0xe6, 0xc7, 0xcd, 0xd7, 0x94, 0x90, 0xef, 0x29,
	0x21, 0x3f, 0x53, 0x42, 0x0e, 0xcb, 0xf0, 0x81, 0x0f, 0xbf, 0x01, 0x00, 0x00, 0xff, 0xff, 0x25,
	0x71, 0x8d, 0x24, 0x69, 0x01, 0x00, 0x00,
}

func (m *Treeitem) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalTo(dAtA)
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Treeitem) MarshalTo(dAtA []byte) (int, error) {
	var i int
	_ = i
	var l int
	_ = l
	if len(m.DisplayName) > 0 {
		dAtA[i] = 0xa
		i++
		i = encodeVarintTreeitem(dAtA, i, uint64(len(m.DisplayName)))
		i += copy(dAtA[i:], m.DisplayName)
	}
	if len(m.Id) > 0 {
		dAtA[i] = 0x12
		i++
		i = encodeVarintTreeitem(dAtA, i, uint64(len(m.Id)))
		i += copy(dAtA[i:], m.Id)
	}
	if len(m.Subtitle) > 0 {
		dAtA[i] = 0x1a
		i++
		i = encodeVarintTreeitem(dAtA, i, uint64(len(m.Subtitle)))
		i += copy(dAtA[i:], m.Subtitle)
	}
	if len(m.Description) > 0 {
		dAtA[i] = 0x22
		i++
		i = encodeVarintTreeitem(dAtA, i, uint64(len(m.Description)))
		i += copy(dAtA[i:], m.Description)
	}
	if len(m.Icon) > 0 {
		dAtA[i] = 0x2a
		i++
		i = encodeVarintTreeitem(dAtA, i, uint64(len(m.Icon)))
		i += copy(dAtA[i:], m.Icon)
	}
	if len(m.KeyWords) > 0 {
		dAtA[i] = 0x32
		i++
		i = encodeVarintTreeitem(dAtA, i, uint64(len(m.KeyWords)))
		i += copy(dAtA[i:], m.KeyWords)
	}
	if m.HasError {
		dAtA[i] = 0x38
		i++
		if m.HasError {
			dAtA[i] = 1
		} else {
			dAtA[i] = 0
		}
		i++
	}
	if m.Open {
		dAtA[i] = 0x40
		i++
		if m.Open {
			dAtA[i] = 1
		} else {
			dAtA[i] = 0
		}
		i++
	}
	if m.Link != nil {
		dAtA[i] = 0x4a
		i++
		i = encodeVarintTreeitem(dAtA, i, uint64(m.Link.Size()))
		n1, err1 := m.Link.MarshalTo(dAtA[i:])
		if err1 != nil {
			return 0, err1
		}
		i += n1
	}
	if len(m.Children) > 0 {
		for _, msg := range m.Children {
			dAtA[i] = 0x52
			i++
			i = encodeVarintTreeitem(dAtA, i, uint64(msg.Size()))
			n, err := msg.MarshalTo(dAtA[i:])
			if err != nil {
				return 0, err
			}
			i += n
		}
	}
	if m.XXX_unrecognized != nil {
		i += copy(dAtA[i:], m.XXX_unrecognized)
	}
	return i, nil
}

func encodeVarintTreeitem(dAtA []byte, offset int, v uint64) int {
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return offset + 1
}
func (m *Treeitem) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.DisplayName)
	if l > 0 {
		n += 1 + l + sovTreeitem(uint64(l))
	}
	l = len(m.Id)
	if l > 0 {
		n += 1 + l + sovTreeitem(uint64(l))
	}
	l = len(m.Subtitle)
	if l > 0 {
		n += 1 + l + sovTreeitem(uint64(l))
	}
	l = len(m.Description)
	if l > 0 {
		n += 1 + l + sovTreeitem(uint64(l))
	}
	l = len(m.Icon)
	if l > 0 {
		n += 1 + l + sovTreeitem(uint64(l))
	}
	l = len(m.KeyWords)
	if l > 0 {
		n += 1 + l + sovTreeitem(uint64(l))
	}
	if m.HasError {
		n += 2
	}
	if m.Open {
		n += 2
	}
	if m.Link != nil {
		l = m.Link.Size()
		n += 1 + l + sovTreeitem(uint64(l))
	}
	if len(m.Children) > 0 {
		for _, e := range m.Children {
			l = e.Size()
			n += 1 + l + sovTreeitem(uint64(l))
		}
	}
	if m.XXX_unrecognized != nil {
		n += len(m.XXX_unrecognized)
	}
	return n
}

func sovTreeitem(x uint64) (n int) {
	for {
		n++
		x >>= 7
		if x == 0 {
			break
		}
	}
	return n
}
func sozTreeitem(x uint64) (n int) {
	return sovTreeitem(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Treeitem) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTreeitem
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Treeitem: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Treeitem: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field DisplayName", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTreeitem
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthTreeitem
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTreeitem
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.DisplayName = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTreeitem
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthTreeitem
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTreeitem
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Id = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Subtitle", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTreeitem
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthTreeitem
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTreeitem
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Subtitle = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Description", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTreeitem
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthTreeitem
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTreeitem
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Description = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Icon", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTreeitem
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthTreeitem
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTreeitem
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Icon = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field KeyWords", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTreeitem
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthTreeitem
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTreeitem
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.KeyWords = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 7:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field HasError", wireType)
			}
			var v int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTreeitem
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				v |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			m.HasError = bool(v != 0)
		case 8:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Open", wireType)
			}
			var v int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTreeitem
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				v |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			m.Open = bool(v != 0)
		case 9:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Link", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTreeitem
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthTreeitem
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthTreeitem
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Link == nil {
				m.Link = &furo.Link{}
			}
			if err := m.Link.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 10:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Children", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTreeitem
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthTreeitem
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthTreeitem
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Children = append(m.Children, &Treeitem{})
			if err := m.Children[len(m.Children)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipTreeitem(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthTreeitem
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthTreeitem
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			m.XXX_unrecognized = append(m.XXX_unrecognized, dAtA[iNdEx:iNdEx+skippy]...)
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipTreeitem(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowTreeitem
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowTreeitem
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
			return iNdEx, nil
		case 1:
			iNdEx += 8
			return iNdEx, nil
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowTreeitem
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthTreeitem
			}
			iNdEx += length
			if iNdEx < 0 {
				return 0, ErrInvalidLengthTreeitem
			}
			return iNdEx, nil
		case 3:
			for {
				var innerWire uint64
				var start int = iNdEx
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return 0, ErrIntOverflowTreeitem
					}
					if iNdEx >= l {
						return 0, io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					innerWire |= (uint64(b) & 0x7F) << shift
					if b < 0x80 {
						break
					}
				}
				innerWireType := int(innerWire & 0x7)
				if innerWireType == 4 {
					break
				}
				next, err := skipTreeitem(dAtA[start:])
				if err != nil {
					return 0, err
				}
				iNdEx = start + next
				if iNdEx < 0 {
					return 0, ErrInvalidLengthTreeitem
				}
			}
			return iNdEx, nil
		case 4:
			return iNdEx, nil
		case 5:
			iNdEx += 4
			return iNdEx, nil
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
	}
	panic("unreachable")
}

var (
	ErrInvalidLengthTreeitem = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowTreeitem   = fmt.Errorf("proto: integer overflow")
)