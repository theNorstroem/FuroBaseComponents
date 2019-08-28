// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: furo/meta.proto

package furo

import proto "github.com/gogo/protobuf/proto"
import fmt "fmt"
import math "math"

import io "io"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion2 // please upgrade the proto package

// fields of meta info
type Metafield struct {
	// constraints of a field
	Constraints *Fieldconstraint `protobuf:"bytes,4,opt,name=constraints" json:"constraints,omitempty"`
	// meta information of a field
	Meta                 *Fieldmeta `protobuf:"bytes,3,opt,name=meta" json:"meta,omitempty"`
	XXX_NoUnkeyedLiteral struct{}   `json:"-"`
	XXX_unrecognized     []byte     `json:"-"`
	XXX_sizecache        int32      `json:"-"`
}

func (m *Metafield) Reset()         { *m = Metafield{} }
func (m *Metafield) String() string { return proto.CompactTextString(m) }
func (*Metafield) ProtoMessage()    {}
func (*Metafield) Descriptor() ([]byte, []int) {
	return fileDescriptor_meta_49d8a0d500bb5acf, []int{0}
}
func (m *Metafield) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Metafield) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Metafield.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalTo(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (dst *Metafield) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Metafield.Merge(dst, src)
}
func (m *Metafield) XXX_Size() int {
	return m.Size()
}
func (m *Metafield) XXX_DiscardUnknown() {
	xxx_messageInfo_Metafield.DiscardUnknown(m)
}

var xxx_messageInfo_Metafield proto.InternalMessageInfo

func (m *Metafield) GetConstraints() *Fieldconstraint {
	if m != nil {
		return m.Constraints
	}
	return nil
}

func (m *Metafield) GetMeta() *Fieldmeta {
	if m != nil {
		return m.Meta
	}
	return nil
}

// meta info
type Meta struct {
	// fields of meta info
	Meta                 map[string]*Metafield `protobuf:"bytes,1,rep,name=meta" json:"meta,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value"`
	XXX_NoUnkeyedLiteral struct{}              `json:"-"`
	XXX_unrecognized     []byte                `json:"-"`
	XXX_sizecache        int32                 `json:"-"`
}

func (m *Meta) Reset()         { *m = Meta{} }
func (m *Meta) String() string { return proto.CompactTextString(m) }
func (*Meta) ProtoMessage()    {}
func (*Meta) Descriptor() ([]byte, []int) {
	return fileDescriptor_meta_49d8a0d500bb5acf, []int{1}
}
func (m *Meta) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Meta) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Meta.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalTo(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (dst *Meta) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Meta.Merge(dst, src)
}
func (m *Meta) XXX_Size() int {
	return m.Size()
}
func (m *Meta) XXX_DiscardUnknown() {
	xxx_messageInfo_Meta.DiscardUnknown(m)
}

var xxx_messageInfo_Meta proto.InternalMessageInfo

func (m *Meta) GetMeta() map[string]*Metafield {
	if m != nil {
		return m.Meta
	}
	return nil
}

// meta
type Fieldmeta struct {
	// meta information of a field
	Label                string   `protobuf:"bytes,1,opt,name=label,proto3" json:"label,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Fieldmeta) Reset()         { *m = Fieldmeta{} }
func (m *Fieldmeta) String() string { return proto.CompactTextString(m) }
func (*Fieldmeta) ProtoMessage()    {}
func (*Fieldmeta) Descriptor() ([]byte, []int) {
	return fileDescriptor_meta_49d8a0d500bb5acf, []int{2}
}
func (m *Fieldmeta) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Fieldmeta) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Fieldmeta.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalTo(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (dst *Fieldmeta) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Fieldmeta.Merge(dst, src)
}
func (m *Fieldmeta) XXX_Size() int {
	return m.Size()
}
func (m *Fieldmeta) XXX_DiscardUnknown() {
	xxx_messageInfo_Fieldmeta.DiscardUnknown(m)
}

var xxx_messageInfo_Fieldmeta proto.InternalMessageInfo

func (m *Fieldmeta) GetLabel() string {
	if m != nil {
		return m.Label
	}
	return ""
}

// constrains of fields
type Fieldconstraint struct {
	// constrain of a field
	Constraint           map[string]string `protobuf:"bytes,1,rep,name=constraint" json:"constraint,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	XXX_NoUnkeyedLiteral struct{}          `json:"-"`
	XXX_unrecognized     []byte            `json:"-"`
	XXX_sizecache        int32             `json:"-"`
}

func (m *Fieldconstraint) Reset()         { *m = Fieldconstraint{} }
func (m *Fieldconstraint) String() string { return proto.CompactTextString(m) }
func (*Fieldconstraint) ProtoMessage()    {}
func (*Fieldconstraint) Descriptor() ([]byte, []int) {
	return fileDescriptor_meta_49d8a0d500bb5acf, []int{3}
}
func (m *Fieldconstraint) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Fieldconstraint) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Fieldconstraint.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalTo(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (dst *Fieldconstraint) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Fieldconstraint.Merge(dst, src)
}
func (m *Fieldconstraint) XXX_Size() int {
	return m.Size()
}
func (m *Fieldconstraint) XXX_DiscardUnknown() {
	xxx_messageInfo_Fieldconstraint.DiscardUnknown(m)
}

var xxx_messageInfo_Fieldconstraint proto.InternalMessageInfo

func (m *Fieldconstraint) GetConstraint() map[string]string {
	if m != nil {
		return m.Constraint
	}
	return nil
}

func init() {
	proto.RegisterType((*Metafield)(nil), "furo.Metafield")
	proto.RegisterType((*Meta)(nil), "furo.Meta")
	proto.RegisterMapType((map[string]*Metafield)(nil), "furo.Meta.MetaEntry")
	proto.RegisterType((*Fieldmeta)(nil), "furo.Fieldmeta")
	proto.RegisterType((*Fieldconstraint)(nil), "furo.Fieldconstraint")
	proto.RegisterMapType((map[string]string)(nil), "furo.Fieldconstraint.ConstraintEntry")
}
func (m *Metafield) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalTo(dAtA)
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Metafield) MarshalTo(dAtA []byte) (int, error) {
	var i int
	_ = i
	var l int
	_ = l
	if m.Meta != nil {
		dAtA[i] = 0x1a
		i++
		i = encodeVarintMeta(dAtA, i, uint64(m.Meta.Size()))
		n1, err := m.Meta.MarshalTo(dAtA[i:])
		if err != nil {
			return 0, err
		}
		i += n1
	}
	if m.Constraints != nil {
		dAtA[i] = 0x22
		i++
		i = encodeVarintMeta(dAtA, i, uint64(m.Constraints.Size()))
		n2, err := m.Constraints.MarshalTo(dAtA[i:])
		if err != nil {
			return 0, err
		}
		i += n2
	}
	if m.XXX_unrecognized != nil {
		i += copy(dAtA[i:], m.XXX_unrecognized)
	}
	return i, nil
}

func (m *Meta) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalTo(dAtA)
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Meta) MarshalTo(dAtA []byte) (int, error) {
	var i int
	_ = i
	var l int
	_ = l
	if len(m.Meta) > 0 {
		for k, _ := range m.Meta {
			dAtA[i] = 0xa
			i++
			v := m.Meta[k]
			msgSize := 0
			if v != nil {
				msgSize = v.Size()
				msgSize += 1 + sovMeta(uint64(msgSize))
			}
			mapSize := 1 + len(k) + sovMeta(uint64(len(k))) + msgSize
			i = encodeVarintMeta(dAtA, i, uint64(mapSize))
			dAtA[i] = 0xa
			i++
			i = encodeVarintMeta(dAtA, i, uint64(len(k)))
			i += copy(dAtA[i:], k)
			if v != nil {
				dAtA[i] = 0x12
				i++
				i = encodeVarintMeta(dAtA, i, uint64(v.Size()))
				n3, err := v.MarshalTo(dAtA[i:])
				if err != nil {
					return 0, err
				}
				i += n3
			}
		}
	}
	if m.XXX_unrecognized != nil {
		i += copy(dAtA[i:], m.XXX_unrecognized)
	}
	return i, nil
}

func (m *Fieldmeta) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalTo(dAtA)
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Fieldmeta) MarshalTo(dAtA []byte) (int, error) {
	var i int
	_ = i
	var l int
	_ = l
	if len(m.Label) > 0 {
		dAtA[i] = 0xa
		i++
		i = encodeVarintMeta(dAtA, i, uint64(len(m.Label)))
		i += copy(dAtA[i:], m.Label)
	}
	if m.XXX_unrecognized != nil {
		i += copy(dAtA[i:], m.XXX_unrecognized)
	}
	return i, nil
}

func (m *Fieldconstraint) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalTo(dAtA)
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Fieldconstraint) MarshalTo(dAtA []byte) (int, error) {
	var i int
	_ = i
	var l int
	_ = l
	if len(m.Constraint) > 0 {
		for k, _ := range m.Constraint {
			dAtA[i] = 0xa
			i++
			v := m.Constraint[k]
			mapSize := 1 + len(k) + sovMeta(uint64(len(k))) + 1 + len(v) + sovMeta(uint64(len(v)))
			i = encodeVarintMeta(dAtA, i, uint64(mapSize))
			dAtA[i] = 0xa
			i++
			i = encodeVarintMeta(dAtA, i, uint64(len(k)))
			i += copy(dAtA[i:], k)
			dAtA[i] = 0x12
			i++
			i = encodeVarintMeta(dAtA, i, uint64(len(v)))
			i += copy(dAtA[i:], v)
		}
	}
	if m.XXX_unrecognized != nil {
		i += copy(dAtA[i:], m.XXX_unrecognized)
	}
	return i, nil
}

func encodeVarintMeta(dAtA []byte, offset int, v uint64) int {
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return offset + 1
}
func (m *Metafield) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Meta != nil {
		l = m.Meta.Size()
		n += 1 + l + sovMeta(uint64(l))
	}
	if m.Constraints != nil {
		l = m.Constraints.Size()
		n += 1 + l + sovMeta(uint64(l))
	}
	if m.XXX_unrecognized != nil {
		n += len(m.XXX_unrecognized)
	}
	return n
}

func (m *Meta) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if len(m.Meta) > 0 {
		for k, v := range m.Meta {
			_ = k
			_ = v
			l = 0
			if v != nil {
				l = v.Size()
				l += 1 + sovMeta(uint64(l))
			}
			mapEntrySize := 1 + len(k) + sovMeta(uint64(len(k))) + l
			n += mapEntrySize + 1 + sovMeta(uint64(mapEntrySize))
		}
	}
	if m.XXX_unrecognized != nil {
		n += len(m.XXX_unrecognized)
	}
	return n
}

func (m *Fieldmeta) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Label)
	if l > 0 {
		n += 1 + l + sovMeta(uint64(l))
	}
	if m.XXX_unrecognized != nil {
		n += len(m.XXX_unrecognized)
	}
	return n
}

func (m *Fieldconstraint) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if len(m.Constraint) > 0 {
		for k, v := range m.Constraint {
			_ = k
			_ = v
			mapEntrySize := 1 + len(k) + sovMeta(uint64(len(k))) + 1 + len(v) + sovMeta(uint64(len(v)))
			n += mapEntrySize + 1 + sovMeta(uint64(mapEntrySize))
		}
	}
	if m.XXX_unrecognized != nil {
		n += len(m.XXX_unrecognized)
	}
	return n
}

func sovMeta(x uint64) (n int) {
	for {
		n++
		x >>= 7
		if x == 0 {
			break
		}
	}
	return n
}
func sozMeta(x uint64) (n int) {
	return sovMeta(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Metafield) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowMeta
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Metafield: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Metafield: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Meta", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMeta
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthMeta
			}
			postIndex := iNdEx + msglen
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Meta == nil {
				m.Meta = &Fieldmeta{}
			}
			if err := m.Meta.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Constraints", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMeta
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthMeta
			}
			postIndex := iNdEx + msglen
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Constraints == nil {
				m.Constraints = &Fieldconstraint{}
			}
			if err := m.Constraints.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipMeta(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthMeta
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
func (m *Meta) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowMeta
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Meta: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Meta: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Meta", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMeta
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthMeta
			}
			postIndex := iNdEx + msglen
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Meta == nil {
				m.Meta = make(map[string]*Metafield)
			}
			var mapkey string
			var mapvalue *Metafield
			for iNdEx < postIndex {
				entryPreIndex := iNdEx
				var wire uint64
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return ErrIntOverflowMeta
					}
					if iNdEx >= l {
						return io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					wire |= (uint64(b) & 0x7F) << shift
					if b < 0x80 {
						break
					}
				}
				fieldNum := int32(wire >> 3)
				if fieldNum == 1 {
					var stringLenmapkey uint64
					for shift := uint(0); ; shift += 7 {
						if shift >= 64 {
							return ErrIntOverflowMeta
						}
						if iNdEx >= l {
							return io.ErrUnexpectedEOF
						}
						b := dAtA[iNdEx]
						iNdEx++
						stringLenmapkey |= (uint64(b) & 0x7F) << shift
						if b < 0x80 {
							break
						}
					}
					intStringLenmapkey := int(stringLenmapkey)
					if intStringLenmapkey < 0 {
						return ErrInvalidLengthMeta
					}
					postStringIndexmapkey := iNdEx + intStringLenmapkey
					if postStringIndexmapkey > l {
						return io.ErrUnexpectedEOF
					}
					mapkey = string(dAtA[iNdEx:postStringIndexmapkey])
					iNdEx = postStringIndexmapkey
				} else if fieldNum == 2 {
					var mapmsglen int
					for shift := uint(0); ; shift += 7 {
						if shift >= 64 {
							return ErrIntOverflowMeta
						}
						if iNdEx >= l {
							return io.ErrUnexpectedEOF
						}
						b := dAtA[iNdEx]
						iNdEx++
						mapmsglen |= (int(b) & 0x7F) << shift
						if b < 0x80 {
							break
						}
					}
					if mapmsglen < 0 {
						return ErrInvalidLengthMeta
					}
					postmsgIndex := iNdEx + mapmsglen
					if mapmsglen < 0 {
						return ErrInvalidLengthMeta
					}
					if postmsgIndex > l {
						return io.ErrUnexpectedEOF
					}
					mapvalue = &Metafield{}
					if err := mapvalue.Unmarshal(dAtA[iNdEx:postmsgIndex]); err != nil {
						return err
					}
					iNdEx = postmsgIndex
				} else {
					iNdEx = entryPreIndex
					skippy, err := skipMeta(dAtA[iNdEx:])
					if err != nil {
						return err
					}
					if skippy < 0 {
						return ErrInvalidLengthMeta
					}
					if (iNdEx + skippy) > postIndex {
						return io.ErrUnexpectedEOF
					}
					iNdEx += skippy
				}
			}
			m.Meta[mapkey] = mapvalue
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipMeta(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthMeta
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
func (m *Fieldmeta) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowMeta
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Fieldmeta: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Fieldmeta: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Label", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMeta
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= (uint64(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthMeta
			}
			postIndex := iNdEx + intStringLen
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Label = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipMeta(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthMeta
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
func (m *Fieldconstraint) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowMeta
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Fieldconstraint: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Fieldconstraint: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Constraint", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMeta
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthMeta
			}
			postIndex := iNdEx + msglen
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Constraint == nil {
				m.Constraint = make(map[string]string)
			}
			var mapkey string
			var mapvalue string
			for iNdEx < postIndex {
				entryPreIndex := iNdEx
				var wire uint64
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return ErrIntOverflowMeta
					}
					if iNdEx >= l {
						return io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					wire |= (uint64(b) & 0x7F) << shift
					if b < 0x80 {
						break
					}
				}
				fieldNum := int32(wire >> 3)
				if fieldNum == 1 {
					var stringLenmapkey uint64
					for shift := uint(0); ; shift += 7 {
						if shift >= 64 {
							return ErrIntOverflowMeta
						}
						if iNdEx >= l {
							return io.ErrUnexpectedEOF
						}
						b := dAtA[iNdEx]
						iNdEx++
						stringLenmapkey |= (uint64(b) & 0x7F) << shift
						if b < 0x80 {
							break
						}
					}
					intStringLenmapkey := int(stringLenmapkey)
					if intStringLenmapkey < 0 {
						return ErrInvalidLengthMeta
					}
					postStringIndexmapkey := iNdEx + intStringLenmapkey
					if postStringIndexmapkey > l {
						return io.ErrUnexpectedEOF
					}
					mapkey = string(dAtA[iNdEx:postStringIndexmapkey])
					iNdEx = postStringIndexmapkey
				} else if fieldNum == 2 {
					var stringLenmapvalue uint64
					for shift := uint(0); ; shift += 7 {
						if shift >= 64 {
							return ErrIntOverflowMeta
						}
						if iNdEx >= l {
							return io.ErrUnexpectedEOF
						}
						b := dAtA[iNdEx]
						iNdEx++
						stringLenmapvalue |= (uint64(b) & 0x7F) << shift
						if b < 0x80 {
							break
						}
					}
					intStringLenmapvalue := int(stringLenmapvalue)
					if intStringLenmapvalue < 0 {
						return ErrInvalidLengthMeta
					}
					postStringIndexmapvalue := iNdEx + intStringLenmapvalue
					if postStringIndexmapvalue > l {
						return io.ErrUnexpectedEOF
					}
					mapvalue = string(dAtA[iNdEx:postStringIndexmapvalue])
					iNdEx = postStringIndexmapvalue
				} else {
					iNdEx = entryPreIndex
					skippy, err := skipMeta(dAtA[iNdEx:])
					if err != nil {
						return err
					}
					if skippy < 0 {
						return ErrInvalidLengthMeta
					}
					if (iNdEx + skippy) > postIndex {
						return io.ErrUnexpectedEOF
					}
					iNdEx += skippy
				}
			}
			m.Constraint[mapkey] = mapvalue
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipMeta(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthMeta
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
func skipMeta(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowMeta
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
					return 0, ErrIntOverflowMeta
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
					return 0, ErrIntOverflowMeta
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
			iNdEx += length
			if length < 0 {
				return 0, ErrInvalidLengthMeta
			}
			return iNdEx, nil
		case 3:
			for {
				var innerWire uint64
				var start int = iNdEx
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return 0, ErrIntOverflowMeta
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
				next, err := skipMeta(dAtA[start:])
				if err != nil {
					return 0, err
				}
				iNdEx = start + next
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
	ErrInvalidLengthMeta = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowMeta   = fmt.Errorf("proto: integer overflow")
)

func init() { proto.RegisterFile("furo/meta.proto", fileDescriptor_meta_49d8a0d500bb5acf) }

var fileDescriptor_meta_49d8a0d500bb5acf = []byte{
	// 267 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0xe2, 0x4f, 0x2b, 0x2d, 0xca,
	0xd7, 0xcf, 0x4d, 0x2d, 0x49, 0xd4, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0x62, 0x01, 0x09, 0x28,
	0x65, 0x72, 0x71, 0xfa, 0xa6, 0x96, 0x24, 0xa6, 0x65, 0xa6, 0xe6, 0xa4, 0x08, 0x29, 0x73, 0xb1,
	0x80, 0x14, 0x48, 0x30, 0x2b, 0x30, 0x6a, 0x70, 0x1b, 0xf1, 0xeb, 0x81, 0x54, 0xe8, 0xb9, 0x81,
	0xa4, 0x40, 0xc2, 0x41, 0x60, 0x49, 0x21, 0x73, 0x2e, 0xee, 0xe4, 0xfc, 0xbc, 0xe2, 0x92, 0xa2,
	0xc4, 0xcc, 0xbc, 0x92, 0x62, 0x09, 0x16, 0xb0, 0x5a, 0x51, 0x24, 0xb5, 0x08, 0xd9, 0x20, 0x64,
	0x95, 0x4a, 0x55, 0x5c, 0x2c, 0x20, 0xab, 0x84, 0x34, 0xa0, 0xb6, 0x30, 0x2a, 0x30, 0x6b, 0x70,
	0x1b, 0x89, 0x40, 0x74, 0x82, 0x64, 0xc0, 0x84, 0x6b, 0x5e, 0x49, 0x51, 0x25, 0xc4, 0x2a, 0x29,
	0x0f, 0x88, 0xe3, 0xc0, 0x42, 0x42, 0x02, 0x5c, 0xcc, 0xd9, 0xa9, 0x95, 0x12, 0x8c, 0x0a, 0x8c,
	0x1a, 0x9c, 0x41, 0x20, 0xa6, 0x90, 0x2a, 0x17, 0x6b, 0x59, 0x62, 0x4e, 0x69, 0xaa, 0x04, 0x13,
	0xb2, 0x7b, 0xe1, 0xde, 0x09, 0x82, 0xc8, 0x5a, 0x31, 0x59, 0x30, 0x2a, 0x29, 0x72, 0x71, 0xc2,
	0xfd, 0x21, 0x24, 0xc2, 0xc5, 0x9a, 0x93, 0x98, 0x94, 0x9a, 0x03, 0x35, 0x0b, 0xc2, 0x51, 0x9a,
	0xce, 0xc8, 0xc5, 0x8f, 0xe6, 0x7e, 0x21, 0x57, 0x2e, 0x2e, 0x04, 0x0f, 0xea, 0x60, 0x55, 0xac,
	0x5e, 0xd5, 0x73, 0x86, 0x33, 0x21, 0x3e, 0x40, 0xd2, 0x28, 0x65, 0xcb, 0xc5, 0x8f, 0x26, 0x8d,
	0xc5, 0x37, 0x22, 0xc8, 0xbe, 0xe1, 0x44, 0x72, 0xbc, 0x13, 0xcf, 0x89, 0x47, 0x72, 0x8c, 0x17,
	0x1e, 0xc9, 0x31, 0x3e, 0x78, 0x24, 0xc7, 0x98, 0xc4, 0x06, 0x8e, 0x3e, 0x63, 0x40, 0x00, 0x00,
	0x00, 0xff, 0xff, 0x24, 0xed, 0x4b, 0x8c, 0xd1, 0x01, 0x00, 0x00,
}
